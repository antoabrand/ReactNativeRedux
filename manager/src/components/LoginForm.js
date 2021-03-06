import React, { Component } from "react";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import {
  emailChanged,
  passwordChanged,
  loginUser,
  loginUserFail
} from "../actions";
import { connect } from "react-redux";
import { View, Text } from "react-native";

class LoginForm extends Component {
  //helper methods
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loadingSpinner === true) {
      return <Spinner size="large" />;
    } else {
      return <Button onPress={this.onLoginPress.bind(this)}>Login</Button>;
    }
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorMessage}>{this.props.error}</Text>
        </View>
      );
    }
  }

  //rendering jsx
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorMessage: {
    alignSelf: "center",
    color: "red",
    fontSize: 20
  }
};
//this is the func that will return props from state and pass them to your component
const mapStateToProps = state => {
  const { email, password, error, loadingSpinner } = state.auth;
  return {
    email,
    password,
    error,
    loadingSpinner
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  loginUserFail
})(LoginForm);
