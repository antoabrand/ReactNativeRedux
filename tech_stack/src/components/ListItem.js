import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  showExpanded() {
    if (this.props.item.id === this.props.selectedLibraryId) {
      console.log("inside ShowExpanded");
      return (
        <CardSection>
          <Text style={styles.titleStyle}>{this.props.item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    // console.log(this.props.item);
    const { titleStyle } = styles;
    const { id, title, description } = this.props.item;

    return (
      //onPress give the id of th selected item to the action's payload
      //action will then be used for the reducer to change the state and return the updated
      //state with the new value
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
            {this.showExpanded()}
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

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

//first argument of connect is for mapStateToProprs
//since we don't need mapStateToProps we are going to pass null as the first argument
//the second argument will be to wire the actions object to listItem component as props
//in order for it to have access to those actions - placing actions as the second argument
//mutates the object to have the return action dispatched to the redux store - and takes all the actions
//inside the object and passes them all to our component as props
export default connect(mapStateToProps, actions)(ListItem);
