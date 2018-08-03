import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    );
  }
}

export default App;
