import React, {Component} from "react";
import {TouchableHighlight, View, Text} from "react-native";

class SalesFloorTool extends Component{

    //meanwhile using this - will use our own header eventually 
    static navigationOptions = {
        title: "Sales Floor Tool",
        headerStyle: {
            backgroundColor: '#007dc6', 
          },
          headerTitleStyle: {
            color: 'white'
          },
    }
   
    render(){
        const {header} = this.props.navigation.state.params;
        return(
            <View>
                <Text>{header}</Text>
            </View>
        )
    }
}

export default SalesFloorTool;