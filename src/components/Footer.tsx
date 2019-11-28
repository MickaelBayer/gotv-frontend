import React from 'react';
import '../styles/components/footer.scss';
import { Container, Row, Col } from 'react-bootstrap/';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const Footer: React.FunctionComponent = () => {
  const location = useLocation().pathname.slice(1);
  return (
    <div className="footer">
      <div className={'foot-div-' + location}>
        <Container>
          <Row>
            <Col>
              <NavLink to="/" className="linkNav-foot">
                Qui sommes nous ?
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/contact" className="linkNav-foot">
                Nous contacter
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/" className="linkNav-foot">
                Mentions légales
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col>GoTV series © 2019 — Tous droits réservés ®</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
