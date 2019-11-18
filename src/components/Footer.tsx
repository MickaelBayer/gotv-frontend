import React from "react";
import "../styles/components/footer.scss";
import { Container, Row, Col } from 'react-bootstrap/';

const Footer: React.FunctionComponent = () => {
    return (
        <footer className="foot">
            <div className="foot-div">
                <Container>
                    <Row>
                        <Col>
                            Qui sommes nous ?
                        </Col>
                        <Col>
                            Nous contacter
                        </Col>
                        <Col>
                            Mentions légales
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            GoTV series © 2019 — Tous droits réservés ®
                        </Col>
                    </Row>
                </Container>
                {/* <div className="copyright">
                    GoTV series © 2019 — Tous droits réservés ®
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;