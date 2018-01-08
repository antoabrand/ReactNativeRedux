// Import a library to help create a component 
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a component 
const App = () => (

    <View>
        <Header headerText={'Albums'} />

        <AlbumList />

    </View>

    // <Text></Text>

    //jsx - follows symantics of html
    //syntactic sugar for react method calls 
    //under the hood does this: 
    /** 
     *  React.createElement(
            Text,
            null,
            "Some Text"
        ); 
    */
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
