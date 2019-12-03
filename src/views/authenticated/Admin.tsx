import React from 'react';
import '../../styles/views/admin.scss';
import { Spinner, Table } from 'react-bootstrap';
import { AuthenticationService } from '../../services/api/authentication.service';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../store';
import { UserActionTypes } from '../../store/modules/user/user.type';
import { getAllUsers } from '../../store/modules/user/user.action';
import { connect } from 'react-redux';
import UserService from '../../services/api/entities/user.service';

const mapStateToProps = (state: AppState) => ({
  users: state.users.users,
  usersIsLoading: state.users.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  getAllUsers: bindActionCreators(getAllUsers, dispatch)
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class Admin extends React.Component<Props, { isLoading: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.loadingDb = this.loadingDb.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
  }

  async loadingDb() {
    this.setState({ isLoading: true });
    await new Promise(resolve => {
      setTimeout(() => {
        this.setState({ isLoading: false });
        alert('Base de données mise à jour !');
      }, 3000);
    });
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  async deleteUser(id: number) {
    const userService: UserService = new UserService();
    const result = userService.delete(id);
    new Promise(resolve => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  renderTableData() {
    return this.props.users.map((user, index) => {
      const {
        usr_id,
        usr_pseudo,
        usr_lastname,
        usr_firstname,
        usr_email,
        usr_active
      } = user;
      console.log(usr_active);
      return (
        <tr key={usr_pseudo}>
          <td>{usr_pseudo}</td>
          <td>{usr_lastname}</td>
          <td>{usr_firstname}</td>
          <td>{usr_email}</td>
          <td id="deleteUserBin" onClick={() => this.deleteUser(usr_id)}>
            {' '}
            🗑
          </td>
        </tr>
      );
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
        <div className="usersTable">
          <Table id="usersTable">
            <thead>
              <tr>
                <th>Pseudo</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Suppression</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
