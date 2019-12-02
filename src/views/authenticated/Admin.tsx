import React from 'react';
import '../../styles/views/admin.scss';
import { Spinner } from 'react-bootstrap';
import { AuthenticationService } from "../../services/api/authentication.service";
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../store';
import { UserActionTypes } from '../../store/modules/user/user.type';
import { getAllUsers } from '../../store/modules/user/user.action';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState) => ({
  users: state.users.users,
  usersIsLoading: state.users.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  getAllUsers: bindActionCreators(getAllUsers, dispatch),
})

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Admin extends React.Component<Props, { isLoading: boolean }> {
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
        this.setState({ isLoading: false })
        alert('Base de données mise à jour !');
      }, 3000);
    });
  }

  componentDidMount() {
    this.props.getAllUsers();
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);