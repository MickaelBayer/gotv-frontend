import React from "react";
import Col from 'react-bootstrap/Col';
import { Serie } from "../../models/serie.model";
import "../../styles/components/serie.scss";

export class SeriesCard extends React.Component<{ serie: Serie }, {}> {
  render() {
    return (
      <Col md={4}>
        <img src={this.props.serie.see_poster_path} className="d-block serie-card"></img>
      </Col>
    )
  }
}