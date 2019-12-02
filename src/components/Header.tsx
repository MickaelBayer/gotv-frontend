import React from 'react';
import '../styles/components/header.scss';
import logo from '../assets/logo.png';
import loupe from '../assets/loupe.png';
import userLogo from '../assets/user_white.png';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import {AuthenticationService} from "../services/api/authentication.service";
import SearchPage from './home/SearchPage';
import UserZoneNoAuth from './home/UserZoneNoAuth';
import UserZoneAuth from './home/UserZoneAuth';

export default class Header extends React.Component<{}, { isSearch: boolean }> {

  constructor(props: any) {
    super(props);
    this.state = {
      isSearch: false
    };
    this.activSearchPage = this.activSearchPage.bind(this);
  }

  activSearchPage() {
    // this.state.isSearch = true;
    this.setState({isSearch: !this.state.isSearch});
  }

  logoutOnClick() {
    AuthenticationService.logout();
    document.location.href="/"
  }
  render() {
    return (
      <Navbar bg="#B40C25" expand="lg" className="shadow">
        <Navbar.Brand href="/" className="logoBar">
          <img src={logo} alt="logo" width={55}/>
        </Navbar.Brand>
        <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" data-toggle="collapse">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="linkNav" activeStyle={{ color: "#FEE066" }}>ACCUEIL</NavLink>
            <NavLink to="/series" className="linkNav" activeStyle={{ color: "#FEE066" }}>LES SÉRIES</NavLink>
            <NavLink to="/pricing" className="linkNav" activeStyle={{ color: "#FEE066" }}>EVÈNEMENTS</NavLink>
            <NavLink to="/offers" className="linkNav" activeStyle={{ color: "#FEE066" }}>NOS OFFRES</NavLink>
            <NavLink to="/contact" className="linkNav" activeStyle={{ color: "#FEE066" }}>CONTACT</NavLink>
            { !AuthenticationService.isAuth() && <Link to="/signin" className="linkNav signinLinkHamburger">SE CONNECTER</Link> }
            { AuthenticationService.isAuth() && <Link to="/account" className="linkNav signinLinkHamburger">MON COMPTE</Link> }
            { AuthenticationService.isAuth() && <div className="linkNav signinLinkHamburger logoutHamburger" onClick={this.logoutOnClick}>Déconnexion</div> }
          </Nav>
          <div className="btn-search mr-auto" onClick={this.activSearchPage}>
            <div className="loupe">
              <img src={loupe} alt="" width={20} />
            </div>
            <div className="textSearch">RECHERCHER</div>
          </div>
          { this.state.isSearch && <SearchPage/> }
          { !AuthenticationService.isAuth() && <UserZoneNoAuth/> }
          { AuthenticationService.isAuth() && <UserZoneAuth/> }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
