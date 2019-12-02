import React from 'react';
import '../../styles/views/admin.scss';
import { Spinner } from 'react-bootstrap';
import {AuthenticationService} from "../../services/api/authentication.service";

export default class Admin extends React.Component<{}, { isLoading: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.loadingDb = this.loadingDb.bind(this);
  }

  async loadingDb() {
    this.setState({ isLoading: true });
    await new Promise(resolve => {
      setTimeout(() => {
        this.setState({isLoading: false})
        alert('Base de données mise à jour !');
      }, 3000);
    });
  }

  render() {
    return (
      <div className="adminPage">
        <div className="titleAdminPage">Administration</div>
        <div className="btnUpdDb" onClick={this.loadingDb}>
          {this.state.isLoading ? (
            <Spinner animation="border" />
          ) : (
            <div>Mettre à jour la liste des séries </div>
          )}
        </div>
      </div>
    );
  }
}
