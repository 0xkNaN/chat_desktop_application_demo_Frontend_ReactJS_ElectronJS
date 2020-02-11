import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Layout from "./layout";
import signin from "./pages/sign-in";
import signup from "./pages/sign-up";
import home from "./pages/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/signin" component={signin} />
            <Route exact path="/signup" component={signup} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
