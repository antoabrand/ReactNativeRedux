import React from "react";
import { View } from "react-native";

const CardSection = props => {
  //we can pass in styles as array, the right most style will overwrite the styles to the left
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};

export { CardSection };
