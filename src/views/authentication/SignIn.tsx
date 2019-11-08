import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cookie from 'js-cookie';
import { AuthenticationService } from '../../services/api/authentication.service';
import { Redirect } from 'react-router';
import '../../styles/views/signin.scss';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

export default class SignIn extends Component {
  private authenticationService: AuthenticationService;
  state = { redirection: false };
  constructor(props: React.Component) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authenticationService = new AuthenticationService();
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.authenticationService
      .login({ usr_pseudo: data.get('pseudo'), password: data.get('password') })
      .then(response => {
        if (response.status === 200 && response.data.token) {
          let jwt = response.data.token;
          Cookie.set('token', jwt);
          this.setState({ redirection: true });
        } else if (response.status === 500) {
        }
      });
  };

  render() {
    const { redirection } = this.state;
    if (redirection) {
      //Affichage de la redirection
      return <Redirect to="/" />;
    }
    return (
      <div className="signin">
        <div className="logoSignin">
          <img src={logo} width={110} alt="logo" />
        </div>
        <div className="titleConnexion"> CONNEXION </div>
        <Form onSubmit={this.handleSubmit} className="formSignin">
          <Form.Group controlId="pseudo">
            <Form.Label>Pseudo:</Form.Label>
            <Form.Control type="text" placeholder="Pseudo" name="pseudo" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              name="password"
            />
          </Form.Group>
          <div className="forgetPwd">
            <a href="/resetpwd">Mot de passe oublié ?</a>
          </div>
          <Button type="submit" className="btnConnect float-right">
            Se Connecter
          </Button>
        </Form>
          <div className="textSignup">Vous n'avez pas encore de compte ?</div>
          <Link to="/signup" className="signupLink">Inscrivez-vous</Link>
      </div>
    );
  }
}
