import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

class App extends Component {
  render() {
    return (
      //Provider tag - facilitates communication between react and redux
      <Provider store={createStore(reducers, {}, enhancers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;
