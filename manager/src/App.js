import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { View, Text } from "react-native";
import reducers from "./reducers";
import { Header } from "./components/common";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBQif2zUGmpEntEiulbVeKfbRliEv4D7UE",
      authDomain: "manager-d4be0.firebaseapp.com",
      databaseURL: "https://manager-d4be0.firebaseio.com",
      projectId: "manager-d4be0",
      storageBucket: "manager-d4be0.appspot.com",
      messagingSenderId: "769430705231"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      //createStore must have a function argument passed - even if that function only returns an empty array so that it won't throw an error
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText={"Login"} />
          <LoginForm />
        </View>
      </Provider>
    );
    console.log("Hi" + store.getState());
  }
}

export default App;
