import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <ScrollView>
                    <Header headerText="Tech Stack" />
                    <LibraryList />
                </ScrollView>
            </Provider>
        );
    }
}


export default App;
