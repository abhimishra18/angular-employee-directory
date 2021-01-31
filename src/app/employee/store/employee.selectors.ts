import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState, selectAll } from './employee.reducers';

export const employeeFeatureSelector = createFeatureSelector<EmployeeState>('employees');

export const getAllEmployees = createSelector(
  employeeFeatureSelector,
  selectAll
);


export const getEmployeeById = (id: string) => createSelector(
  getAllEmployees, (entities) => {
    if (entities.length) {
      return entities.find(entity => {
        return entity.id === id;
      })
    }
    else {
      return null;
    }
  }
);
