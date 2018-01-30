import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  render() {
    // console.log(this.props.item);
    const { titleStyle } = styles;
    const {id, title} = this.props.item;
    
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
//in order for it to have access to those actions - placing actions as the second argument
//mutates the object to have the return action dispatched to the redux store - and takes all the actions
//inside the object and passes them all to our component as props
export default connect(null, actions)(ListItem);
