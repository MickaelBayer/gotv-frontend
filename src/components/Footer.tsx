import React from "react";
import "../styles/components/footer.scss";
import {Container, Row, Col } from 'react-bootstrap/';

const Footer: React.FunctionComponent = () => {
    return (
        <div className="foot">
            <div id="triangle-footer-bottomright"></div>
            <div className="foot-div">
                <Container className="remove-all-margin-padding">
                    <Row className="remove-all-margin-padding">
                        <Col className="remove-all-margin-padding">
                            Qui sommes nous ?
                        </Col>
                        <Col className="remove-all-margin-padding">
                            Nous contacter
                        </Col>
                        <Col className="remove-all-margin-padding">
                            Mentions légales
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