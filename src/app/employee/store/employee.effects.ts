import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private router: Router) {}
}
