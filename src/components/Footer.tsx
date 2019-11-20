import React from "react";
import "../styles/components/footer.scss";
import {Container, Row, Col } from 'react-bootstrap/';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const Footer: React.FunctionComponent = () => {

    let location = useLocation().pathname.slice(1);
    console.log(location)
    return (
        <div className="foot">
            <div id={"triangle-footer-" + location}></div>
            <div className={"foot-div-" + location}>
                <Container className="remove-all-margin-padding">
                    <Row className="remove-all-margin-padding">
                        <Col className="remove-all-margin-padding">
                            <NavLink to="/" className="linkNav">Qui sommes nous ?</NavLink>
                        </Col>
                        <Col className="remove-all-margin-padding">
                            <NavLink to="/contact" className="linkNav">Nous contacter</NavLink>
                        </Col>
                        <Col className="remove-all-margin-padding">
                            <NavLink to="/" className="linkNav">Mentions légales</NavLink>
                        </Col>
                    </Row>
                    <Row className="remove-all-margin-padding">
                        <Col className="remove-all-margin-padding">
                            GoTV series © 2019 — Tous droits réservés ®
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer;