import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/commons';


class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyD58Ps7FBuLwbIS5UOLJuNpWCZlvKAviPY",
            authDomain: "auth-a7a8f.firebaseapp.com",
            databaseURL: "https://auth-a7a8f.firebaseio.com",
            projectId: "auth-a7a8f",
            storageBucket: "auth-a7a8f.appspot.com",
            messagingSenderId: "996040656133"
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'Authenticationgj'} />
            </View>
        )
    }
}

export default App;