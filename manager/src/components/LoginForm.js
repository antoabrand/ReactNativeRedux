import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { connect } from "react-redux";

class LoginForm extends Component {
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
        <CardSection>
          <Button onPress={this.onLoginPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
//this is the func that will return what you need from state and pass them as props to your component to use
const mapStateToProps = state => {
  const { email, password } = state.auth;
  return {
    email: email,
    password: password
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
