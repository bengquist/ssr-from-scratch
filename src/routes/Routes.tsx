import React from "react";
import { Switch, Route } from "react-router";
import Home from "../components/Home";
import People from "../components/People";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
    </Switch>
  );
}

export default Routes;
