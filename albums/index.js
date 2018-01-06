// Import a library to help create a component 
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component 
const App = () => (
    <Header headerText={'Albums'} /> 
    
    
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
