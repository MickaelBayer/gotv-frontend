import React from "react";
import "../styles/components/header.scss";
import logo from "../assets/emmy.png";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand href="#home">
                    <Image src={logo} rounded />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#features">Les Séries</Nav.Link>
                    <Nav.Link href="#pricing">Evénements</Nav.Link>
                    <Nav.Link href="#pricing">Nos offres</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                    <Nav.Link href="#pricing">Rechercher</Nav.Link>
                </Nav>
                <Button variant="secondary">Se connecter</Button>
                <Button variant="secondary">Créer un compte</Button>
            </Navbar>
        )
    }
}