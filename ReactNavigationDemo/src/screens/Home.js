import React, {Component} from "react";
import {Button, View, Text, StyleSheet} from "react-native";

class Home extends Component{

    static navigationOptions = {
        title: "Home"
    }

    render(){
        //destructure navigate method 
        const {navigate} = this.props.navigation;
        const {button} = styles; 

        const users = [
            {name: "Tony"},
            {name: "Chris"},
            {name: "Mitikaa"},
        ]

        return (
            <View style={button}> 
                {users.map( user => {
                    return (    
                        <Button 
                            onPress={() =>navigate('Chat', {user})}
                            title={"Chat with "+ user.name}
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
