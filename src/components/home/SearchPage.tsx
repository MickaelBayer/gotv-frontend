import React, { Component } from 'react';
import "../../styles/components/searchPage.scss";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class SearchPage extends Component {
reloadPage() {
    window.location.reload()
}
  render() {
    return (
      <div className="searchPage">
        <div className="closeBtn">
            <div className="croix" onClick={this.reloadPage}>X</div>
        </div>
      <InputGroup className="searchInput">
          <FormControl
              className="personalizeInput"
              placeholder="Rechercher"
              aria-label="Username"
              aria-describedby="basic-addon1"
          />
      </InputGroup>
      </div>
    );
  }
}
