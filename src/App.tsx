import React from 'react';
import './App.scss';
import Viewer from './components/Viewer';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Viewer />
      </div>
    )
  };
}