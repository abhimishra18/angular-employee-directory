import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Employee } from '../model/employee.model';
import { employeeActionTypes } from './employee.actions';

export interface EmployeeState extends EntityState<Employee> {
  employeeLoaded: boolean;
}

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialState = adapter.getInitialState({
  employeeLoaded: false
});

export const employeeReducer = createReducer(
  initialState,

  on(employeeActionTypes.employeesLoaded, (state, action) => {
    return adapter.addAll(
      action.employees,
      { ...state, employeeLoaded: true }
    );
  }),

  on(employeeActionTypes.createEmplyee, (state, action) => {
    return adapter.addOne(action.employee, state);
  }),

  on(employeeActionTypes.deleteEmployeeOnSuccess, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),

  on(employeeActionTypes.updateEmployeeOnSuccess, (state, action) => {
    return adapter.upsertOne(action.employee, state);
  })

);

export const { selectAll, selectIds } = adapter.getSelectors();
