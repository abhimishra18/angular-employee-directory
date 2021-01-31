import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/reducers/index';
import { Employee } from '../../model/employee.model';
import { deleteEmployee, updateEmployee } from '../../store/employee.actions';
import { getAllEmployees } from '../../store/employee.selectors';

@Component({
  selector: 'app-courses-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employee$: Observable<Employee[]>;

  constructor(private readonly store: Store<AppState>, private readonly router: Router) { }

  ngOnInit() {
    this.employee$ = this.store.select(getAllEmployees);
  }

  deleteEmployee(id: string): void {
    this.store.dispatch(deleteEmployee({ id }));
  }

  updateEmployee(id: string): void {
    this.router.navigate(['/update-employee', id])
  }

  addNewEmployee(): void {
    this.router.navigateByUrl('/create-employee')
  }

}
