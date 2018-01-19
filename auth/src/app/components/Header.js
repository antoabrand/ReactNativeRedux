import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {

    const {viewStyle,textStyle} = styles; 

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.text}</Text>
        </View>
    );
};

const styles = {

    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.5,
        elevation: 2, 
        position: 'relative'
        
        
    },
    textStyle: {
        fontSize: 20
    }

}

export default Header; 