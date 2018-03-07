import { EMPLOYEE_UPDATE, CREATE_EMPLOYEE } from "../actions/ActionConsts";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane'}
      return { ...state, [action.payload.prop]: action.payload.value };
    case CREATE_EMPLOYEE:
      return INITIAL_STATE;
    case EMPLOYEES_FETCH_SUCESS: 
      return{};
    default:
      return state;
  }
};
