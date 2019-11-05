import React from 'react';
import '../styles/components/header.scss';
import logo from '../assets/logo.png';
import {Link, NavLink} from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark static-top ">
        <div className="navbar-inner">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width={55} />
          </a>
        </div>
        <div className="navbar-inner">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" activeClassName="test" exact activeStyle={{ color: "#FEE066"}}>ACCUEIL</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/features" activeClassName="active" activeStyle={{ color: "#FEE066"}}>LES SÉRIES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing" activeClassName="active" activeStyle={{ color: "#FEE066"}}>EVÈNEMENTS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/offers" activeClassName="active" activeStyle={{ color: "#FEE066"}}>NOS OFFRES</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active" activeStyle={{ color: "#FEE066"}}>CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
  }
}
