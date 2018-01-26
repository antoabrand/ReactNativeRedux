import React, { Component } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
    render() {
        return true;
    }
}

const mapStateToProps = state => {
    console.log(state);
};

export default connect(mapStateToProps)(LibraryList);
