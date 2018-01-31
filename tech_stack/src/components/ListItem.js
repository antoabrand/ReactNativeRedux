import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  //if the item selected is the same as the item id then we return some jsx to render to screen
  showExpanded() {
    const { item } = this.props;
    if (this.props.expanded) {
      console.log("inside ShowExpanded");
      return (
        <CardSection>
          <Text style={styles.cardStyle}>{item.description}</Text>
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
          </CardSection>
          {this.showExpanded()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
    fontWeight: "bold",
  },
  cardStyle: {
    fontSize: 16,
    flex: 4,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#fff8dc",
  },
};

//this func gives us ability to interface between app level state to component level - get state properties and inject to component props using connect func at bottom
//when state changes - this func will rerun and pass in a new set of props from component and causes component to rerender
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.item.id;
  return { expanded };
};

//first argument of connect is for mapStateToProps
//since we don't need mapStateToProps we are going to pass null as the first argument
//the second argument will be to wire the actions object to listItem component as props
//in order for it to have access to those actions - placing actions as the second argument
//mutates the object to have the return action dispatched to the redux store - and takes all the actions
//inside the object and passes them all to our component as props
export default connect(mapStateToProps, actions)(ListItem);
