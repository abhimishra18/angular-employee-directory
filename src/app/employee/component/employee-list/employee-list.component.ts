import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/reducers/index';
import { Employee } from '../../model/employee.model';
import { getAllEmployees } from '../../store/employee.selectors';

@Component({
  selector: 'app-courses-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employee$: Observable<Employee[]>;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.employee$ = this.store.select(getAllEmployees);
  }

  addNewEmployee() {
    this.router.navigateByUrl('/create-employee')
  }

}
