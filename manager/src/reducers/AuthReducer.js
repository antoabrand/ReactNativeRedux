// for all things authentication, email/pwd, error with authentication, spinner or not
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_ATTEMPT
} from "../actions/actionConsts";
import LoginForm from "../components/LoginForm";

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
      console.log(action.type + action.payload);
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log(action.type + action.payload);
      return { ...state, password: action.payload };
    case LOGIN_USER:
      console.log(action.type);
      return {
        ...state,
        user: action.payload,
        error: null,
        loadingSpinner: false
      };
    case LOGIN_USER_FAIL:
      console.log(action.type + action.payload);
      return {
        ...state,
        error: "Authentication failed",
        password: "",
        loadingSpinner: false
      };
    case LOGIN_ATTEMPT:
      return { ...state, error: null, loadingSpinner: true };
    default:
      console.log(action.type + action.payload);
      return state;
  }
};
