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

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/series' component={SeriesPage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/contact' component={Contact}/>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App;
