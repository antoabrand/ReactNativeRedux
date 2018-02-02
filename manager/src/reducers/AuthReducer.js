// for all things authentication, email/pwd, error with authentication, spinner or not
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from "../actions/actionConsts";

const INITIAL_STATE = {
  email: " ",
  password: " ",
  user: " "
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      //update and return state  -- below - create new obj, take everything in state and put in new obj, define prop in new obj and place it ontop of state obj and return that new obj
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
