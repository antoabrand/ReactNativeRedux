import React, { Component } from 'react';
import { Text, View } from 'react-native';

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
    //ensures that this method will execute when this compoenent will be rendered to screen

    //sort of like an initialization method 
    componentWillMount() {
        console.log('componentWillMount in AlbumList');
    }

    render() {
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

//make ajax call to get details to create a list of albums


export default AlbumList;

