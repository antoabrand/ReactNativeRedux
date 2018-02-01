// for all things authentication, email/pwd, error with authentication, spinner or not
import { EMAIL_CHANGED } from "../actions/actionConsts";
const INITIAL_STATE = { email: " " };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return action.payload;
    default:
      return state;
  }
};
