import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    console.log(this.props);
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.item.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  cardStyle: {},
};

//first argument of connect is for mapStateToProprs
//since we don't need mapStateToProps we are going to pass null as the first argument
//the second argument will be to wire the actions object to listItem component as props
//in order for it to have access to those actions
export default connect(null, actions)(ListItem);
