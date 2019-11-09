import React, { Component } from 'react';
import '../../styles/views/account.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Account extends Component {
  render() {
    return (
      <div className="accountPage">
        <div className="myAccount">
          <div className="titleMyAccount">Mon compte</div>
          <hr className="whiteLine" />
          <div className="formAccountInfo">
            <Form className="formAccountInfo">
              <Form.Group controlId="lastname">
                <Form.Label>Nom:</Form.Label>
                <Form.Control type="text" name="lastname" />
              </Form.Group>
              <Form.Group controlId="firstname">
                <Form.Label>Prénom:</Form.Label>
                <Form.Control type="text" name="firstname" />
              </Form.Group>
              <Form.Group controlId="birthday">
                <Form.Label>Date de naissance:</Form.Label>
                <Form.Control type="text" name="birthday" />
              </Form.Group>
            </Form>
            <Button
              type="submit"
              className="btnUpdContactInfo float-right"
            >
              Mettre à jour
            </Button>
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
                <Form.Control type="text" name="mail" />
              </Form.Group>
              <Form.Group controlId="tel">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" name="mail" />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Adresse:</Form.Label>
                <Form.Control type="text" name="address" />
              </Form.Group>
              <Form.Group controlId="postal">
                <Form.Label>Code postal:</Form.Label>
                <Form.Control type="text" name="postal" />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>Ville:</Form.Label>
                <Form.Control type="text" name="city" />
              </Form.Group>
              <Form.Group controlId="country">
                <Form.Label>Pays:</Form.Label>
                <Form.Control type="text" name="country" />
              </Form.Group>
            </Form>
            <Button
              type="submit"
              className="btnUpdContactInfo float-right"
            >
              Mettre à jour
            </Button>
          </div>
        </div>
        <div className="subscriptionInfo">
          <div className="titleSubInfo">Mon abonnement</div>
          <hr className="yellowLine" />
          <div className="contentSub">
              
          </div>
        </div>
      </div>
    );
  }
}
