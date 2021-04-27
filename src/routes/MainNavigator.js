import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ScrollToTop } from "../components";
import { Home, Resume } from "../scenes";

export default function MainNavigator() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
