import React from "react";
import "../styles/styles.scss";
import logo from "../assets/emmy.png";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand href="#home">
                    <Image src={logo} rounded />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Accueil</Nav.Link>
                    <Nav.Link href="/features">Les Séries</Nav.Link>
                    <Nav.Link href="/pricing">Evénements</Nav.Link>
                    <Nav.Link href="/offers">Nos offres</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Link to="/signin">
                    <Button>
                        Se Connecter
                    </Button>
                </Link>
                <Link to="/signup">
                    <Button variant="secondary">
                        Créer un compte
                    </Button>
                </Link>
            </Navbar>
        )
    }


}