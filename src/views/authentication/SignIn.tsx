import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/views/signin.scss';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { login } from '../../store/modules/auth/auth.action';
import { AuthActionTypes } from '../../store/modules/auth/auth.type';

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  login: bindActionCreators(login, dispatch)
})

type Props = ReturnType<typeof mapDispatchToProps>;

interface LoginState {
  usr_pseudo: string;
  password: string;
}

class SignIn extends React.Component<Props, LoginState> {

  constructor(props: Readonly<Props>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      usr_pseudo: "",
      password: ""
    }
  }

  handleChange = (field: string) => (event: any) => {
    event.preventDefault()
    this.setState({ [field]: event.target.value } as LoginState);
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();
    this.props.login(this.state.usr_pseudo, this.state.password);
  }

  render() {
    return (
      <div className="signin">
        <div className="logoSignin">
          <img src={logo} width={110} alt="logo" />
        </div>
        <div className="titleConnexion"> CONNEXION </div>
        <Form className="formSignin" onSubmit={this.handleSubmit}>
          <Form.Group controlId="usr_pseudo">
            <Form.Label>Pseudo:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Pseudo"
              value={this.state.usr_pseudo}
              onChange={this.handleChange('usr_pseudo')} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Mot de passe:</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={this.handleChange('password')} />
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

export default connect(null, mapDispatchToProps)(SignIn)
