import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthenticationService } from '../../services/api/authentication.service';
import Cookie from 'js-cookie';
import { Redirect } from 'react-router';
import '../../styles/views/signup.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
  // private authenticationService: AuthenticationService;
  // state = { redirection: false };

  // constructor(props: React.Component) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.authenticationService = new AuthenticationService();
  // }

  // handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //   this.authenticationService
  //     .register({
  //       usr_firstname: data.get('firstname'),
  //       usr_lastname: data.get('lastname'),
  //       usr_email: data.get('email'),
  //       usr_pseudo: data.get('pseudo'),
  //       password: data.get('password')
  //     })
  //     .then(response => {
  //       if (response.status === 200 && response.data.token) {
  //         let jwt = response.data.token;
  //         Cookie.set('token', jwt);
  //         this.setState({ redirection: true });
  //       } else if (response.status === 500) {
  //       }
  //     });
  // };

  render() {
    // const { redirection } = this.state;
    // if (redirection) {
    //   //Affichage de la redirection
    //   return <Redirect to="/" />;
    // }
    return (
      <div className="signup">
        <div className="logoSignup">
          <img src={logo} width={110} alt="logo" />
        </div>
        <div className="titleSign"> INSCRIPTION </div>
        <Form className="formSignup">
          <Form.Group controlId="firstname">
            <Form.Label>Prénom:</Form.Label>
            <Form.Control type="text" placeholder="Prénom" name="firstname" />
            <Form.Control.Feedback type="invalid">
              Le prénom est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="lastname">
            <Form.Label>Nom:</Form.Label>
            <Form.Control type="text" placeholder="Nom" name="lastname" />
            <Form.Control.Feedback type="invalid">
              Le nom est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="pseudo">
            <Form.Label>Pseudo:</Form.Label>
            <Form.Control type="text" placeholder="Pseudo" name="pseudo" />
            <Form.Control.Feedback type="invalid">
              Le pseudo est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Email" name="email" />
            <Form.Control.Feedback type="invalid">
              L'email est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              name="password"
            />
            <Form.Control.Feedback type="invalid">
              Le mot de passe est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirmez votre mot de passe:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmez votre mot de passe"
              name="confirmpassword"
            />
            <Form.Control.Feedback type="invalid">
              Le mot de passe est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="btnSignup float-right" type="submit">
            S'inscrire
          </Button>
        </Form>
        <div className="textSignin">Vous avez déjà un compte ?</div>
        <Link to="/signin" className="signinLink">
          Connectez-vous
        </Link>
      </div>
    );
  }
}
