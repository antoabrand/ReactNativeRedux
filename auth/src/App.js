import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/commons';

class App extends Component {

    render() {
        return (
            <View>
                <Header  headerText={'Authenticationgj'}/>
            </View>
        )
    }
}

export default App;