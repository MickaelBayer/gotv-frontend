import React from "react";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../views/Home";
import Footer from "./Footer";
export default class Viewer extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Route exact={true} path='/' component={Home} />
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}