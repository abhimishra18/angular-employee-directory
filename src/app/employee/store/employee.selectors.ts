import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState, selectAll } from './employee.reducers';

export const employeeFeatureSelector = createFeatureSelector<EmployeeState>('employees');

export const getAllEmployees = createSelector(
  employeeFeatureSelector,
  selectAll
);


