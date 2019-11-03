import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import Series from './components/series/Series';
import PageNotFound from './components/PageNotFound';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/series' component={Series} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App;