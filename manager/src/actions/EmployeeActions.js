import { EMPLOYEE_UPDATE } from "./actionConsts";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
