import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./actionConsts";
import firebase from "firebase";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  firebase.auth
    .signInWithEmailAndPassword(email, password)
    .then(user => console.log(user));
};

//Redux Thunk is a supporting library used to handle any type of asynchronous actions - ajax rqeuests,
