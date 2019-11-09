import React, { Component } from 'react';
import '../../styles/views/account.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import userAccount from '../../assets/user_account.png';

export default class Account extends Component {
  render() {
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
                <Form.Check inline label="Madame" className="radioCiv" type="radio" name="sexe" />
                <Form.Check inline label="Monsieur" className="radioCiv" type="radio" name="sexe" />
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
              <Button type="submit" className="btnUpdContactInfo float-right">
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
            <Button type="submit" className="btnUpdContactInfo float-right">
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
            href="/"
          >
            Supprimer mon compte
          </Button>
        </div>
      </div>
    );
  }
}
