import React from "react";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
