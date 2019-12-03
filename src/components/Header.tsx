import React from 'react';
import '../styles/components/header.scss';
import logo from '../assets/logo.png';
import loupe from '../assets/loupe.png';
import userLogo from '../assets/user_white.png';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { AuthenticationService } from "../services/api/authentication.service";
import SearchPage from './home/SearchPage';
import UserZoneNoAuth from './home/UserZoneNoAuth';
import UserZoneAuth from './home/UserZoneAuth';
import { AppState } from '../store';
import { Dispatch, bindActionCreators } from 'redux';
import { OtherActionTypes } from '../store/modules/other/other.type';
import { setShowSearch } from '../store/modules/other/other.action';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => ({
  searchShow: state.other.showSearch
});

const mapDispatchToProps = (dispatch: Dispatch<OtherActionTypes>) => ({
  setSearchShow: bindActionCreators(setShowSearch, dispatch)
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Header: React.FunctionComponent<Props> = (props) => {

  function showSearch() {
    props.setSearchShow(true)
  }

  function logoutOnClick() {
    AuthenticationService.logout();
    document.location.href = "/"
  }
  return (
    <Navbar bg="#B40C25" expand="lg" className="shadow">
      <Navbar.Brand href="/" className="logoBar">
        <img src={logo} alt="logo" width={55} />
      </Navbar.Brand>
      <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" data-toggle="collapse">
        <Nav className="mr-auto">
          <NavLink to="/" exact className="linkNav" activeStyle={{ color: "#FEE066" }}>ACCUEIL</NavLink>
          <NavLink to="/series" className="linkNav" activeStyle={{ color: "#FEE066" }}>LES SÉRIES</NavLink>
          <NavLink to="/pricing" className="linkNav" activeStyle={{ color: "#FEE066" }}>EVÈNEMENTS</NavLink>
          <NavLink to="/offers" className="linkNav" activeStyle={{ color: "#FEE066" }}>NOS OFFRES</NavLink>
          <NavLink to="/contact" className="linkNav" activeStyle={{ color: "#FEE066" }}>CONTACT</NavLink>
          {!AuthenticationService.isAuth() && <Link to="/signin" className="linkNav signinLinkHamburger">SE CONNECTER</Link>}
          {AuthenticationService.isAuth() && <Link to="/account" className="linkNav signinLinkHamburger">MON COMPTE</Link>}
          {AuthenticationService.isAuth() && <div className="linkNav signinLinkHamburger logoutHamburger" onClick={logoutOnClick}>Déconnexion</div>}
        </Nav>
        <div className="btn-search mr-auto" onClick={showSearch}>
          <div className="loupe">
            <img src={loupe} alt="" width={20} />
          </div>
          <div className="textSearch">RECHERCHER</div>
        </div>
        <SearchPage />
        {!AuthenticationService.isAuth() && <UserZoneNoAuth />}
        {AuthenticationService.isAuth() && <UserZoneAuth />}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);