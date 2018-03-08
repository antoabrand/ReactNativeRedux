import React, {Component} from "react";
import {TouchableHighlight, View, Text} from "react-native";

class BackRoomTool extends Component{

    static navigationOptions = {
        title: "Back Room Tool"
    }

    render(){
        //given to us by the navigator component - used to destructure out the data that's passed
        // const {user} = this.props.navigation.state.params;

        return(
            <View>
                <Text>{"Back Room Tool"} </Text>
            </View>
        )
    }
}

export default BackRoomTool;