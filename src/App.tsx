import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import PageNotFound from './components/PageNotFound';
import { Series } from './components/series/Series';
import SignUp from './views/authentication/SignUp';
import SignIn from './views/authentication/SignIn';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/series' component={Series} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App;
