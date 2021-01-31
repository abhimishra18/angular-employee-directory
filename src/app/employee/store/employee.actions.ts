import { createAction, props } from '@ngrx/store';
import { Employee } from '../model/employee.model';


export const loadEmployees = createAction(
  '[Employee List] Load Courses via Service',
);

export const employeesLoaded = createAction(
  '[Employee Effect] Courses Loaded Successfully',
  props<{ employees: Employee[] }>()
);

export const createEmplyee = createAction(
  '[Create Employee Component] Create Course',
  props<{ employee: Employee }>()
);

export const deleteEmployee = createAction(
  '[Delete Employee Component] Delete Course',
  props<{ id: string }>()
);

export const deleteEmployeeOnSuccess = createAction(
  '[Delete Employee Component Success] Delete Course Success',
  props<{ id: string }>()
);

export const updateEmployee = createAction(
  '[Update Employee Component] Update Course',
  props<{ employee: Employee }>()
);

export const updateEmployeeOnSuccess = createAction(
  '[Update Employee Component Success] Update Course Success',
  props<{ employee: Employee }>()
);

export const employeeActionTypes = {
  loadEmployees,
  employeesLoaded,
  createEmplyee,
  deleteEmployee,
  deleteEmployeeOnSuccess,
  updateEmployee,
  updateEmployeeOnSuccess
};


