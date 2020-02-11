import React, { Component } from "react";
//import PropTypes from "prop-types";

import Header from "../components/Header";

class layout extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default layout;
