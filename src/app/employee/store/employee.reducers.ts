import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
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
      {...state, employeeLoaded: true}
    );
  }),

  on(employeeActionTypes.createEmplyee, (state, action) => {
    return adapter.addOne(action.employee, state);
  }),

);

export const { selectAll, selectIds } = adapter.getSelectors();
