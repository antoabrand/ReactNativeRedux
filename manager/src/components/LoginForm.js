import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { emailChanged, passwordChanged } from "../actions";
import { connect } from "react-redux";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    const { email, password } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={password}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
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

export default connect(mapStateToProps, { emailChanged, passwordChanged })(
  LoginForm
);
