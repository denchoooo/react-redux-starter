import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './containers/Home/Home';
import About from './containers/About/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Redux Starter</h1>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <main className="main-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </main>
        <div className="App-footer">
          Made by <a href="https://twitter.com/denichodev">Deni Cho</a>
        </div>
      </div>
    );
  }
}

export default App;
