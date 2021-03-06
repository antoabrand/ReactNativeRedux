import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import { View } from "react-native";

//this is how we implement routing using react-native-router-flux
const RouterComponent = () => {
  return (
    <Router>
      {/* //one requirement of router-flux is that there must be one parent/root scene
            //all other scenes will be children of this root scene -
            //every scene must have a "key" that describes the scene/screen/view 
            //first child scene listed will be what is displayed first by default unless specified by using the prop 'initial'*/}

      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            component={EmployeeList}
            title="Employees"
            intitial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
