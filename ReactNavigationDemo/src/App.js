import React, {Component} from "react";
import {Text, View} from "react-native";
import {StackNavigator} from 'react-navigation';

//importing screens
import Home from './screens/Home';
import SalesFloorTool from './screens/SalesFloorTool';
import BackRoomTool from './screens/BackRoomTool';


const App = StackNavigator({
  //create my routes - this is the config obj that maps keys to components
  Home:{screen: Home},
  SalesFloorTool:{screen: SalesFloorTool, path: 'imsSFTool/:id'},
  BackRoomTool:{screen: BackRoomTool}
},
  { //set starting point in second argument 
    initialRouteName: 'Home'
  });

// Navigator is a component that sits at the base of our app. 
// Since your entire app is a child of your navigator component, the navigator can pass props to whatever other component it renders,
// allowing you to fire off its navigation methods, check in on its current state, etc.
//
// --- https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462

export default App; 
