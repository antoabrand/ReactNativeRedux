import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//create the albumList component using functional style component
// const AlbumList = () => {
//     return (
//         <View>
//             <Text>Album List</Text>
//     </View>
//     );
// };

//refactor the above to make a Class style component - needed to make ajax call 
let albumTitles;

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

    renderAlbums() {
        albumTitles = this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />);
        return albumTitles;
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

//make ajax call to get details to create a list of albums


export default AlbumList;

