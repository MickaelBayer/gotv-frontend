import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import PageNotFound from './components/PageNotFound';
import { SeriesPage } from './components/series/SeriesPage';
import SignUp from './views/authentication/SignUp';
import SignIn from './views/authentication/SignIn';
import Contact from './components/Contact';
import ForgetPassword from './views/authentication/ForgetPassword';
import Account from './views/authenticated/Account';
import Footer from './components/Footer';

const App: React.FunctionComponent = () => {
  return (
    <div className="container col-12">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/series' component={SeriesPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/contact' component={Contact}/>
        <Route path='/resetpwd' component={ForgetPassword}/>
        <Route path='/account' component={Account}/>
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
