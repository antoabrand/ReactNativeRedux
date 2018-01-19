import { AppRegistry, View } from 'react-native';
import Header from './src/app/components/Header';
import React from 'react';



const App = () => (

    <View>
        <Header text={'Auth'}/>
    </View>

);



AppRegistry.registerComponent('auth', () => App);
