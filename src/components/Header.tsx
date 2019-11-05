import React from 'react';
import '../styles/components/header.scss';
import logo from '../assets/logo.png';
import loupe from '../assets/loupe.png';
import userLogo from '../assets/user_white.png';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="navbar-inner">
          <a className="navbar-brand" href="/home">
            <img src="./img/logo.png" alt="" width={55} />
          </a>
        </div>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="test"
                exact
                activeStyle={{ color: '#FEE066' }}
              >
                ACCUEIL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/features"
                activeClassName="active"
                activeStyle={{ color: '#FEE066' }}
              >
                LES SÉRIES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/pricing"
                activeClassName="active"
                activeStyle={{ color: '#FEE066' }}
              >
                EVÈNEMENTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/offers"
                activeClassName="active"
                activeStyle={{ color: '#FEE066' }}
              >
                NOS OFFRES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
                activeStyle={{ color: '#FEE066' }}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="btn-search">
                <div className="loupe">
                  <img src={loupe} alt="" width={20} />
                </div>
                <div className="textSearch">RECHERCHER</div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="user-zone">
                <div className="user-logo">
                  <img src={userLogo} alt="" width={28} />
                </div>
                <div className="zone-text">
                  <Link className="connect" to="/signin">SE CONNECTER</Link>
                  <Link className="createCompte" to="/signup">Créer un compte</Link>
                </div>
              </div>
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
      </nav>
    );
  }
}
