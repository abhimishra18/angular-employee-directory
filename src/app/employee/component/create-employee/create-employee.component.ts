import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as uuid from 'uuid';
import { AppState } from '../../../store/reducers/index';
import { Employee, Mode } from '../../model/employee.model';
import { createEmplyee, updateEmployee } from '../../store/employee.actions';
import { getEmployeeById } from '../../store/employee.selectors';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.scss']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private readonly store: Store<AppState>, private readonly activatedRouter: ActivatedRoute, private readonly router: Router) { }
  private readonly alive$ = new Subject();
  mode: Mode;
  employee$: Observable<Employee>;
  employeeSelected: Employee;
  name: string;
  department: string;
  employeeId: number;
  ngOnInit() {
    const routeData = this.activatedRouter.snapshot.data;
    const params = this.activatedRouter.snapshot.params;
    this.mode = routeData.type;
    if (routeData.type == Mode.Edit) {
      this.employee$ = this.store.select(getEmployeeById(params.userId));
      this.employee$.pipe(takeUntil(this.alive$))
        .subscribe(employee => {
          if (employee) {
            this.employeeSelected = employee;
            this.patchValues();
          }
        })
    }
  }

  onSubmit(submittedForm): void {
    if (submittedForm.invalid) {
      return;
    }
    else if (submittedForm.valid && this.mode == Mode.Edit) {
      const employyeId: string = this.activatedRouter.snapshot.params.userId;
      const employee: Employee = { id: employyeId, name: submittedForm.value.name, department: submittedForm.value.department, employeeId: submittedForm.value.employeeId };
      this.store.dispatch(updateEmployee({ employee }));
    }
    else if (submittedForm.valid && this.mode == Mode.Add) {
      const employee: Employee = { id: uuid.v4(), name: submittedForm.value.name, department: submittedForm.value.department, employeeId: submittedForm.value.employeeId };
      this.store.dispatch(createEmplyee({ employee }));
    }
  }

  patchValues(): void {
    this.name = this.employeeSelected.name;
    this.employeeId = this.employeeSelected.employeeId;
    this.department = this.employeeSelected.department;
  }

  backToEmployee(): void {
    this.router.navigateByUrl('/employees')
  }

  ngOnDestroy() {
    this.alive$.next(true);
    this.alive$.complete()
  }
}
