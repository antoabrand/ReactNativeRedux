import React, {Component} from "react";
import {TouchableHighlight, View, Text} from "react-native";

class Account extends Component{

    static navigationOptions = {
        title: "Account"
    }

    render(){
        return(
            <View>
                <Text>Account Screen</Text>
            </View>
        )
    }
}

export default Account;