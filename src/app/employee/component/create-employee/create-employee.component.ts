import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as uuid from 'uuid';
import { AppState } from '../../../store/reducers/index';
import { Employee } from '../../model/employee.model';
import { createEmplyee } from '../../store/employee.actions';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    const employee: Employee = {id: uuid.v4(), name: submittedForm.value.name, department: submittedForm.value.department};
    this.store.dispatch(createEmplyee({employee}));
  }
  backToEmployee() {
    this.router.navigateByUrl('/employees')
  }
}
