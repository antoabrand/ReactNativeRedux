import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from "./actionConsts";
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

//async action using redux thunk

export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email.toString().trim(), password).then(user => successfullyLoggedIn(dispatch, user))
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email.toString().trim(), password)).then(user => successfullyLoggedIn(dispatch,user));
  };
};

//helper funcs

const failedLogin = dispatch => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: "failed to login"
  });
};

const successfullyLoggedIn = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

//Redux Thunk is a supporting library (middleWare - must import the middleWare helper from redux (applyMiddleWare)) used to handle any type of asynchronous actions - ajax rqeuests,
//Golden rule of Redux - "Nothing happens for free" no magic
