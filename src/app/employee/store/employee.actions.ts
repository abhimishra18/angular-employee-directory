import { createAction, props } from '@ngrx/store';
import { Employee } from '../model/employee.model';


export const loadEmployees = createAction(
  '[Employee List] Load Courses via Service',
);

export const employeesLoaded = createAction(
  '[Employee Effect] Courses Loaded Successfully',
  props<{employees: Employee[]}>()
);

export const createEmplyee = createAction(
  '[Create Employee Component] Create Course',
  props<{employee: Employee}>()
);


export const employeeActionTypes = {
  loadEmployees,
  employeesLoaded,
  createEmplyee
};


