import React, {Component} from "react";
import {TouchableHighlight, View, Text} from "react-native";

class Chat extends Component{

    static navigationOptions = {
        title: "Chat Screen"
    }

    render(){
        //given to us by the navigator component - used to destructure out the data that's passed
        const {user} = this.props.navigation.state.params;

        return(
            <View>
                <Text>{"Chatting with"} {user.name} </Text>
            </View>
        )
    }
}

export default Chat;