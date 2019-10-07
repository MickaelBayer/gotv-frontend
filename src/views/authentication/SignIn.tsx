import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Cookie from 'js-cookie';
import { AuthenticationService } from "../../services/api/authentication.service";
import { Redirect } from "react-router";

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
		const data = new FormData(event.target)
		this.authenticationService.login({ usr_pseudo: data.get('pseudo'), password: data.get('password') })
			.then(response => {
				if (response.status === 200 && response.data.token) {
					let jwt = response.data.token;
					Cookie.set("token", jwt);
					this.setState({ redirection: true });
				} else if (response.status === 500) {

				}
			});
	}

	render() {
		const { redirection } = this.state;
		if (redirection) {
			//Affichage de la redirection
			return <Redirect to='/' />;
		}
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId="pseudo">
					<Form.Label>Pseudo</Form.Label>
					<Form.Control
						type="text"
						placeholder="Pseudo"
						name="pseudo" />
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Mot de passe</Form.Label>
					<Form.Control
						type="password"
						placeholder="Mot de passe"
						name="password" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Se Connecter
  			</Button>
			</Form>
		)
	}
}