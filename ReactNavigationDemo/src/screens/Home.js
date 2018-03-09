import React, {Component} from "react";
import {Button, View, Text, StyleSheet} from "react-native";
import Config from "react-native-config";
import { API_KEY, ANOTHER_CONFIG, NEW_FEATURE_IS_ENABLED, MAX_ORDER_QTY} from 'react-native-dotenv'

class Home extends Component{

    static navigationOptions = {
        title: "Inventory Management"
    }
    
    render(){

        //destructuring navigate and button style
        const {navigate} = this.props.navigation;
        const {button} = styles; 

        //this could be an axios call to appconfig to render the icons we want 
        const components = [
            {compName: "SalesFloorTool", header:"Sales Floor Tool"},
            {compName: "BackRoomTool", header:"Back Room Tool"}
        ];

        //this helper will navigate to the component we want based on the the title of the component
        const navHelper = (component,navigate) => {

            const {compName,header} = component;

                return navigate(compName,{header});
        }

        return (
            <View style={button}> 
                {components.map( component => {

                    <Text></Text>
                    return (    
                        <Button 
                            onPress={() => navHelper(component,navigate)}
                            title={component.header}
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
