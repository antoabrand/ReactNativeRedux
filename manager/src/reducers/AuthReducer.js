import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_ATTEMPT
} from "../actions/actionConsts";
import LoginForm from "../components/LoginForm";

//optional - create an initial state to pass to our reducer
const INITIAL_STATE = {
    email: "",
    password: "",
    user: null,
    error: "",
    loadingSpinner: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            //update and return state  -- below - create new obj, take everything in state and put in new obj, define prop in new obj and place it ontop of state obj and return that new obj
            // for demo purposes only - need to keep reducers pure so should not contain logging statements
            // console.log("Action.Type: " + action.type +" " +"Action.Payload: " +" " +action.payload);
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: "Authentication failed",
                password: "",
                loadingSpinner: false
            };
        case LOGIN_ATTEMPT:
            return { ...state, error: null, loadingSpinner: true };
        default:
            return state;
    }
};
