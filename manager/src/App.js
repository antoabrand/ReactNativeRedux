import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { View } from "react-native";
import reducers from "./reducers";
import { Header } from "./components/common";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
import ReduxThunk from "redux-thunk";
import Router from "./Router";

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
        //2nd argument {} argument is used to pass any initial state we might want to pass to the redux app
        //3rd argument is for enhancers
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            //createStore must have a function argument passed - even if that function only returns an empty array so that it won't throw an error
            <Provider store={store}>
                {/* <Header headerText={"Login"} /> */}
                {/* Here we will let Router handle the header since it contains one by default */}

                {/* Here we will let router decide what we will show and not show LoginForm by default */}
                {/* <LoginForm /> */}
                <Router />
            </Provider>
        );
        console.log("Hi" + store.getState());
    }
}

export default App;
