export interface Employee {
  id: string;
  name: string;
  department: string;
  employeeId: number;
}

export enum Mode {
  Add = 'add',
  Edit = 'edit'
}
