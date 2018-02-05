// for all things authentication, email/pwd, error with authentication, spinner or not
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL
} from "../actions/actionConsts";
import LoginForm from "../components/LoginForm";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      //update and return state  -- below - create new obj, take everything in state and put in new obj, define prop in new obj and place it ontop of state obj and return that new obj
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.payload, error: null };
    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication failed", password: "" };
    default:
      return state;
  }
};
