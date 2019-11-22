import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/views/signup.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { AuthActionTypes } from '../../store/types/auth.type';
import { register } from '../../store/actions/auth.action';
import { connect } from 'react-redux';
import { IUser } from '../../models/user.model';

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  register: bindActionCreators(register, dispatch)
})

type Props = ReturnType<typeof mapDispatchToProps>;

interface RegisterState {
  usr_pseudo: string;
  usr_email: string;
  usr_firstname: string;
  usr_lastname: string;
  password: string;
}

class SignUp extends React.Component<Props, RegisterState> {

  constructor(props: Readonly<Props>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      usr_pseudo: "",
      usr_email: "",
      usr_firstname: "",
      usr_lastname: "",
      password: ""
    }
  }

  handleChange = (field: string) => (event: any) => {
    event.preventDefault()
    this.setState({ [field]: event.target.value } as RegisterState);
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();
    this.props.register({
      usr_pseudo: this.state.usr_pseudo,
      usr_firstname: this.state.usr_firstname,
      usr_lastname: this.state.usr_lastname,
      usr_email: this.state.usr_email,
      password: this.state.password
    } as IUser);
  }

  render() {
    return (
      <div className="signup">
        <div className="logoSignup">
          <img src={logo} width={110} alt="logo" />
        </div>
        <div className="titleSign"> INSCRIPTION </div>
        <Form className="formSignup" onSubmit={this.handleSubmit}>
          <Form.Group controlId="usr_firstname">
            <Form.Label>Prénom:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Prénom"
              value={this.state.usr_firstname}
              onChange={this.handleChange("usr_firstname")} />
            <Form.Control.Feedback type="invalid">
              Le prénom est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="usr_lastname">
            <Form.Label>Nom:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom"
              value={this.state.usr_lastname}
              onChange={this.handleChange("usr_lastname")} />
            <Form.Control.Feedback type="invalid">
              Le nom est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="usr_pseudo">
            <Form.Label>Pseudo:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pseudo"
              value={this.state.usr_pseudo}
              onChange={this.handleChange("usr_pseudo")} />
            <Form.Control.Feedback type="invalid">
              Le pseudo est incorrect
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="usr_email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={this.state.usr_email}
              onChange={this.handleChange("usr_email")} />
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
              value={this.state.password}
              onChange={this.handleChange("password")} />
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

export default connect(null, mapDispatchToProps)(SignUp)