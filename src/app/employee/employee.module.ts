import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeEffects } from './store/employee.effects';
import { employeeReducer } from './store/employee.reducers';


@NgModule({
  declarations: [
    EmployeeListComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  bootstrap: [],
  exports: [EmployeeListComponent, CreateEmployeeComponent]
})
export class EmployeeModule { }
