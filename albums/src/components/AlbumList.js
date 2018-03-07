import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

let albumTitles;

class AlbumList extends Component {
  //initial state
  state = {
    albums: [],
    someFlag: true,
  };

  //componentWillMount <lifecycle method> will execute when this component is rendered 
  componentWillMount() {
    console.log("componentWillMount in AlbumList");

    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
    //setState is given to us by Component and is availble to all class style components
    //and is the only way to update a component's state
  }

  renderAlbums() {
    albumTitles = this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
    return albumTitles;
  }
  

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
