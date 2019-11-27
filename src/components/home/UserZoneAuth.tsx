import React, { Component } from 'react';
import '../../styles/components/userZoneAuth.scss';
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
          <Link className="accountBtn" to="/account">
            MON COMPTE
          </Link>
          <div className="logout">
            Déconnexion
          </div>
        </div>
      </div>
    );
  }
}
