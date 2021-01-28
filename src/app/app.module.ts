import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/component/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/component/employee-list/employee-list.component';
import { EmployeeModule } from './employee/employee.module';
import { metaReducers, reducers } from './store/reducers';


const routes = [
  {path: 'employees', component: EmployeeListComponent,},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '**', redirectTo: 'employees'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
