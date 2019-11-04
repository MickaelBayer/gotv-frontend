import React from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Home from "../views/Home";

export default class Viewer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Home} />
      </div>
    )
  }
}