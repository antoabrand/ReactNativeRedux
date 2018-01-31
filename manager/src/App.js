import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { View, Text } from "react-native";
import reducers from "./reducers";
import { Header } from "./components/common";

class App extends Component {
  render() {
    return (
      //createStore must have a function argument passed - even if that function only returns an empty array so that it won't throw an argument
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText={"Hi"} />
        </View>
      </Provider>
    );
  }
}

export default App;
