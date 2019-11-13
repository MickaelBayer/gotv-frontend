import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import { Serie } from "../../models/serie.model";
import { Chip, Collapse } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import "../../styles/components/serie.scss";
import { Row, Button } from "react-bootstrap";
import Iframe from 'react-iframe'

export const SeriesCard: React.FunctionComponent<{ serie: Serie }> = (props) => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Col md={2.5}>
        <div className="serie-card" onClick={handleExpandClick}>
          <img src={props.serie.see_poster_path} className="img-gradiant"></img>
          <div className="info-serie">
            <h3>{props.serie.see_name}</h3>
            {props.serie.see_categories.map((categorie, i) => {
              return (<Chip size="small" key={i} label={categorie.cae_label} />)
            })}
            <p>{props.serie.see_overview}</p>
          </div>
        </div>
      </Col>
      <Collapse in={expanded} timeout="auto" unmountOnExit className="d-block collapse-details">
        <Row>
          <Col>
            <Iframe url={`http://www.youtube.com/embed/0NgM3ldsjw8?enablejsapi=1`} width="100%" height="340px" className="p-4 details-video" />
          </Col>
          <Col>
            <h3 className="mt-3">{props.serie.see_name}</h3>
            <div className="d-flex align-items-center my-3">
              <Rating value={5} readOnly className="mr-3" />
              {props.serie.see_categories.map((categorie, i) => {
                return (<Chip size="small" key={i} label={categorie.cae_label} className="details-chip" />)
              })}
            </div>
            <p>{props.serie.see_overview}</p>
            <Button className="details-btn">Voir les détails</Button>
          </Col>
        </Row>
      </Collapse>
    </>
  )

}
