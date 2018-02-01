import { EMAIL_CHANGED } from "./actionConsts";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
