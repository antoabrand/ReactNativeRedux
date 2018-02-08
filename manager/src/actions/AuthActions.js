import firebase from "firebase";
import { Actions } from "react-native-router-flux";

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_ATTEMPT
} from "./actionConsts";

//each of these are actions exported - used in mapStateToProps func as arguments to allow component to call

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

//redux thunk - or an asynchronous call - only dispatches action when we tell it to instead of automatically like every other action
export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_ATTEMPT });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        console.log(error);

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER,
    payload: user
  });
  //call the key of the scene you want to navigate to
  Actions.main();
};
