import { EMPLOYEE_UPDATE, CREATE_EMPLOYEE } from "./ActionConsts";

export const employeeUpdate = ({ prop, value }) => {
  console.log(prop, value);
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const createEmployee = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
  return {
    type: CREATE_EMPLOYEE,
    payload: { name, phone, shift }
  };
};
