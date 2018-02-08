import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { employeeUpdate } from "./reducers";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ name, text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="phone"
            placeholder="555-555-5555"
            value={this.props.phone}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { phone, shift, name } = state.employeeForm;

  return phone, shift, name;
};

export default connect(null, { employeeUpdate })(EmployeeCreate);
