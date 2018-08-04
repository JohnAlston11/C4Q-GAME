import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home/home';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light" style={{backgroundColor: '#ff445f'}} >
          <Link className="navbar-brand" to="/" style={{color: '#61dafb'}} >
            <img src={logo} className="App-logo" alt="logo" />
            React Games
          </Link>
          <Link to="/games">
            Games
          </Link>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
