import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      fetch('https://vibrant-noyce-249d90.netlify.com/api/v2/users.json').then(function(response) {
          console.log('resposne', response)
          return response.blob();
      }).catch(function(err) {
          console.log('err', err)
      });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
