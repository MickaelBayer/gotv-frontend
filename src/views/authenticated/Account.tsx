import React, { Component } from 'react';
import '../../styles/views/account.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import userAccount from '../../assets/user_account.png';
import {IUser} from "../../models/user.model";
import Moment from 'moment';
import UserService from "../../services/api/entities/user.service";
import {AuthenticationService} from "../../services/api/authentication.service";

type Props = { user: IUser };

interface RegisterState {
  usr_firstname: string;
  usr_lastname: string;
  usr_phone: string;
  usr_city: string;
  usr_country: string;
  usr_postal_code: string;
  usr_address: string;
}

export default class Account extends React.Component<Props, RegisterState> {

  constructor(props: Readonly<Props>) {
    super(props);
    // this.updateUser = this.updateUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      usr_firstname: this.props.user.usr_firstname,
      usr_lastname: this.props.user.usr_lastname,
      usr_phone: this.props.user.usr_phone,
      usr_city: this.props.user.usr_city,
      usr_country: this.props.user.usr_country,
      usr_postal_code: this.props.user.usr_postal_code,
      usr_address: this.props.user.usr_address
    }
  }

  handleChange = (field: string) => (event: any) => {
    event.preventDefault()
    this.setState({ [field]: event.target.value } as RegisterState);
  }


  async deleteUser(id: number) {
    const userService: UserService = new UserService();
    const result = userService.delete(id);
    new Promise(resolve => {
      setTimeout(() => {
        AuthenticationService.logout();
        document.location.href="/"
      }, 1000);
    });
  }

  updateUser = async (event: any) => {
    event.preventDefault();
    const userService: UserService = new UserService();
    userService.put(this.props.user.usr_id, {
      usr_lastname: this.state.usr_lastname,
      usr_firstname: this.state.usr_firstname,
      usr_phone: this.state.usr_phone,
      usr_city: this.state.usr_city,
      usr_country: this.state.usr_country,
      usr_postal_code: this.state.usr_postal_code,
      usr_address: this.state.usr_address
    });
  }

  render() {
    Moment.locale('en');
    return (
      <div className="accountPage">
        <div className="myAccount">
          <div className="titleMyAccount">Mon compte</div>
          <hr className="whiteLine" />
          <div className="contentMyAccount">
            <div className="accountImg">
              <div className="imageUserAccount">
                <img src={userAccount} width="100%"/>
              </div>
            </div>
            <div className="formAccountInfo">
              <Form className="formAccountInfo">
                <Form.Group controlId="pseudo">
                  <Form.Label>Pseudo:</Form.Label>
                  <Form.Control type="text" name="pseudo" readOnly defaultValue={this.props.user.usr_pseudo} />
                </Form.Group>
                <Form.Group controlId="lastname">
                  <Form.Label>Nom:</Form.Label>
                  <Form.Control type="text" name="lastname" value={this.state.usr_lastname} onChange={this.handleChange("usr_lastname")}/>
              </Form.Group>
                <Form.Group controlId="firstname">
                  <Form.Label>Prénom:</Form.Label>
                  <Form.Control type="text" name="firstname" value={this.state.usr_firstname} onChange={this.handleChange("usr_firstname")} />
                </Form.Group>
              </Form>
              <Button type="submit" className="btnUpdContactInfo float-right" onClick={this.updateUser}>
                Mettre à jour
              </Button>
            </div>

          </div>

        </div>
        <div className="redTriangle"></div>
        <div className="contactInformation">
          <div className="titleContactInformation">Mes coordonnées</div>
          <hr className="whiteLine" />
          <div className="formContactInfo">
            <Form className="formContactInfo">
              <Form.Group controlId="mail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" name="mail" readOnly defaultValue={this.props.user.usr_email}/>
              </Form.Group>
              <Form.Group controlId="tel">
                <Form.Label>N° téléphone:</Form.Label>
                <Form.Control type="text" name="tel" value={this.state.usr_phone} onChange={this.handleChange("usr_phone")} />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Adresse:</Form.Label>
                <Form.Control type="text" name="address" value={this.state.usr_address} onChange={this.handleChange("usr_address")} />
              </Form.Group>
              <Form.Group controlId="postal">
                <Form.Label>Code postal:</Form.Label>
                <Form.Control type="text" name="postal" value={this.state.usr_postal_code} onChange={this.handleChange("usr_postal_code")} />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>Ville:</Form.Label>
                <Form.Control type="text" name="city" value={this.state.usr_city} onChange={this.handleChange("usr_city")}/>
              </Form.Group>
              <Form.Group controlId="country">
                <Form.Label>Pays:</Form.Label>
                <Form.Control type="text" name="country" value={this.state.usr_country} onChange={this.handleChange("usr_country")}/>
              </Form.Group>
            </Form>
            <Button type="submit" className="btnUpdContactInfo float-right" onClick={this.updateUser}>
              Mettre à jour
            </Button>
          </div>
        </div>
        <div className="subscriptionInfo">
          <div className="titleSubInfo">Mon abonnement</div>
          <hr className="yellowLine" />

          <div className="contentSub">
            <div className="mySub">
              <div className="nameSub">Gratuit</div>
              <div className="descriptionSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor ultricies dolor quis gravida. Vestibulum cursus sem feugiat purus posuere, nec maximus risus bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec aliquet, velit ut iaculis dignissim, metus dolor ultricies quam.</div>
            </div>
          </div>
          <Button
              type="submit"
              className="btnDiscoverSub float-right"
              href="/offers"
          >
            Découvrir les offres !
          </Button>
          <hr className="yellowLine" />
          <Button
            type="submit"
            className="btnDeleteAccount float-right"
            onClick={() => this.deleteUser(this.props.user.usr_id)}
          >
            Supprimer mon compte
          </Button>
        </div>
      </div>
    );
  }
}
