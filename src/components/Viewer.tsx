import React from "react";
import Header from "./Header";
import SignOut from "../views/authentication/SignOut";
import { Route } from "react-router-dom";
import Home from "../views/Home";

export default class Viewer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/series' component={SignOut} />
        <Route exact path='/event' component={SignOut} />
        <Route exact path='/signout' component={SignOut} />
      </div>
    )
  }
}