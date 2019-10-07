import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './views/authentication/SignIn';
import SignOut from './views/authentication/SignOut';
import SignUp from './views/authentication/SignUp';
import App from './App';
import Footer from './components/Footer';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/signout" exact component={SignOut} />
    <Footer />
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
