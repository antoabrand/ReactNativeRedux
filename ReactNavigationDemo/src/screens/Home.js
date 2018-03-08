import React, {Component} from "react";
import {Button, View, Text, StyleSheet} from "react-native";
import Config from "react-native-config";
import { API_KEY, ANOTHER_CONFIG, NEW_FEATURE_IS_ENABLED, MAX_ORDER_QTY} from 'react-native-dotenv'

class Home extends Component{

    static navigationOptions = {
        title: "Home"
    }
    
    render(){

        //destructure navigate method 
        const {navigate} = this.props.navigation;
        const {button} = styles; 

        const components = [
            {component: "SalesFloorTool", header:"Sales Floor Tool"},
            {component: "BackRoomTool", header:"Back Room Tool"}
        ];

        const navHelper = (component,navigate) => {
            let componentName = component.component;

                return navigate(componentName);
           
        }

        return (
            <View style={button}> 
                {components.map( component => {
                    return (    
                        <Button 
                            onPress={() => navigate(component.component)}
                            title={component.title}
                            color="#0000ff"/>)
                    })}
            </View>
        )
    }
}

const styles = {
    button: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007aff",

    }
}

export default Home;
