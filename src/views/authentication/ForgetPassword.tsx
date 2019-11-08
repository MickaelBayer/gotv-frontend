import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/views/forgetPassword.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default class ForgetPassword extends Component {
  render() {
    return (
      <div className="forgetPwdPage">
        <div className="logoForget">
          <img src={logo} width={110} alt="logo" />
        </div>
        <div className="titleForget"> Mot de passe oublié ? </div>
        <Form className="formSignin">
          <Form.Group controlId="mail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" name="mail" />
          </Form.Group>
          <Button type="submit" href="/signin" className="btnValidResetPwd float-right">
            Valider
          </Button>
        </Form>
        <div className="textSignup">Vous n'avez pas encore de compte ?</div>
        <Link to="/signup" className="signupLink">
          Inscrivez-vous
        </Link>
      </div>
    );
  }
}
