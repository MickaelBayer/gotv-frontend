import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/home/Home';
import PageNotFound from './components/PageNotFound';
import SerieDetail from './components/series/SerieDetail';
import SeriesPage from './views/SeriesPage';
import Account from './views/authenticated/Account';
import ForgetPassword from './views/authentication/ForgetPassword';
import SignIn from './views/authentication/SignIn';
import SignUp from './views/authentication/SignUp';
import { AuthenticationService } from './services/api/authentication.service';
import { UserActionTypes } from './store/modules/user/user.type';
import { bindActionCreators, Dispatch } from 'redux';
import { getUserInfo } from './store/modules/user/user.action';
import { connect } from 'react-redux';
import { AppState } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommingSoon from './components/home/CommingSoon';
import ProtectedRoute, { ProtectedRouteProps } from './components/ProtectedRoute';
import Legal from './components/home/Legal';
import Admin from './views/authenticated/Admin';

const mapStateToProps = (state: AppState) => ({
  user: state.user.user,
  isLoading: state.user.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  getUserInfo: bindActionCreators(getUserInfo, dispatch)
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const App: React.FunctionComponent<Props> = props => {
  useEffect(() => {
    if (AuthenticationService.isAuth()) {
      props.getUserInfo();
    }
  }, []);

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: AuthenticationService.isAuth(),
    authenticationPath: '/signin',
    restrictedPath: '',
    isAllowed: true,
    user: props.user
  };

  return (
    <Router>
      <Header />
      <ToastContainer hideProgressBar draggable={false} />
      {props.isLoading && AuthenticationService.isAuth() ? (
        <Spinner animation="border" />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/series" component={SeriesPage} />
          <Route
            path="/serie/:see_id"
            render={() => <SerieDetail user={props.user} />}
          />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route path="/resetpwd" component={ForgetPassword} />
          <Route path="/pricing" component={CommingSoon} />
          <Route path="/offers" component={CommingSoon} />
          <Route path="/legal" component={Legal} />
          <ProtectedRoute {...defaultProtectedRouteProps} path="/admin" expectedRole={1} component={Admin} />
          <Route path="/account" render={() => <Account user={props.user} />} />
          <Route component={PageNotFound} />
        </Switch>
      )}
      <Footer />
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
