import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/components/contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contactPage">
        <div className="titleContact"> Nous contacter </div>
        <hr className="lineContact"/>
        <Form className="formContact">
          <Form.Group controlId="lastname">
            <Form.Label>Nom: *</Form.Label>
            <Form.Control type="text" name="lastname" />
          </Form.Group>
          <Form.Group controlId="firstname">
            <Form.Label>Prénom: *</Form.Label>
            <Form.Control type="text" name="firstname" />
          </Form.Group>
          <Form.Group controlId="mail">
            <Form.Label>Adresse mail: *</Form.Label>
            <Form.Control type="text" name="mail" />
          </Form.Group>
          <Form.Group controlId="tel">
            <Form.Label>Téléphone: *</Form.Label>
            <Form.Control type="text" name="tel" />
          </Form.Group>
          <Form.Group controlId="obj">
            <Form.Label>Objet: *</Form.Label>
            <Form.Control type="text" name="obj" />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message: *</Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="Écrire ici votre message..." name="message" />
          </Form.Group>
          <Button type="submit" className="btnSend float-right">
            Envoyer
          </Button>
        </Form>
      </div>
    );
  }
}
