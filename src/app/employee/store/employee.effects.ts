import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { employeeActionTypes } from './employee.actions';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private router: Router,) { }

  employees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActionTypes.createEmplyee),
      tap(() =>
        this.router.navigateByUrl('/employees')
      )
    ),
    { dispatch: false }
  );

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActionTypes.deleteEmployee),
      mergeMap(({ id }) => {
        return of(employeeActionTypes.deleteEmployeeOnSuccess({ id }))
      })
    ));

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActionTypes.updateEmployee),
      mergeMap(({ employee }) => {
        this.router.navigateByUrl('/employees');
        return of(employeeActionTypes.updateEmployeeOnSuccess({ employee }))
      })
    ),
  );

}
