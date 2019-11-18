import React from "react";
import Col from 'react-bootstrap/Col';
import { Serie } from "../../models/serie.model";
import { Chip } from '@material-ui/core';
import "../../styles/components/serie.scss";
import { Link, NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router";

const SeriesCard: React.FunctionComponent<{ serie: Serie }> = (props) => {
  const match: any = useRouteMatch();
  return (
    <Col md={2.5}>
      <Link to={`serie/${props.serie.see_id}`}>
        <div className="serie-card">
          <img src={props.serie.see_poster_path} className="img-gradiant"></img>
          <div className="info-serie">
            <h3>{props.serie.see_name}</h3>
            {props.serie.see_categories.map((categorie, i) => {
              return (<Chip size="small" key={i} label={categorie.cae_label} />)
            })}
            <p>{props.serie.see_overview}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default SeriesCard;
