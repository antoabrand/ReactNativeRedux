import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: () => (r1, r2) => r1 != r2,
    });

    this.DataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem item={library} />;
  }
  render() {
    return <ListView dataSource={this.DataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//connect() will wire the mapStateToProps func to the component libraryList giving
//access to the data the libraryList returns through the props system.

export default connect(mapStateToProps)(LibraryList);
