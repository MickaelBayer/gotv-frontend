import React from 'react';
import '../styles/components/footer.scss';
import { Container, Row, Col } from 'react-bootstrap/';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const Footer: React.FunctionComponent = () => {
  let location = useLocation().pathname.slice(1);
  if (location.includes("serie") === true) {
    location = "series"
  }
  return (
    <div className="footer">
      <div className={'foot-div-' + location}>
        <Container>
          <Row>
            <Col>
              <NavLink to="/" className={'linkNav-foot linkNav-foot-' + location}>
                Qui sommes nous ?
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/contact" className={'linkNav-foot linkNav-foot-' + location}>
                Nous contacter
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/legal" className={'linkNav-foot linkNav-foot-' + location}>
                Mentions légales
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col className={'copyright copyright-' + location}>GoTV series © 2019 — Tous droits réservés ®</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
