import React, { Component } from 'react';
import '../../styles/components/UserZoneNoAuth.scss';
import { Link } from 'react-router-dom';
import userLogo from '../../assets/user_white.png';

export default class UserZoneNoAuth extends Component {
  render() {
    return (
      <div className="user-zone">
        <div className="user-logo">
          <img src={userLogo} alt="" width={28} />
        </div>
        <div className="zone-text">
          <Link className="connect" to="/signin">
            SE CONNECTER
          </Link>
          <Link className="createCompte" to="/signup">
            Créer un compte
          </Link>
        </div>
      </div>
    );
  }
}
