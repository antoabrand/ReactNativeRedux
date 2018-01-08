import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

//create the albumList component using functional style component
// const AlbumList = () => {
//     return (
//         <View>
//             <Text>Album List</Text>
//     </View>
//     );
// };

//refactor the above to make a Class style component - needed to make ajax call 

class AlbumList extends Component {
    //initial state
    state = {
        albums: []

    };
    //ensures that this method will execute when this compoenent will be rendered to screen
    //sort of like an initialization method 
    componentWillMount() {
        console.log('componentWillMount in AlbumList');

        //returns a promise
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                response => this.setState({ albums: response.data })
            );
        //setState is given to us by Component and is availble to all class style components
        //and is the only way to update a component's state
    }

    render() {
        console.log(this.state);

        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

//make ajax call to get details to create a list of albums


export default AlbumList;

