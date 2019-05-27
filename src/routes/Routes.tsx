import React from "react";
import { Switch, Route } from "react-router";
import Home from "../components/Home";
import UsersList from "../components/UsersList";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UsersList} />
    </Switch>
  );
}

export default Routes;
