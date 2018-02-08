import { Employee_Update, EMPLOYEE_UPDATE } from "../actions/actionConsts";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        //action.payload === { prop: 'name', value: 'jane'}
        return { ...state,  [action.payload.prop]: action.payload.value}
        default:
            return state;
    }
};
