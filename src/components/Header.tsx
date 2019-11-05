import React from 'react';
import '../styles/components/header.scss';
import logo from '../assets/logo.png';

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
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                    Accueil
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/features">
                  Les séries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">
                    Evénements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/offers">
                  Nos offres
                </a>
              </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">
                    Contact
                </a>
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
