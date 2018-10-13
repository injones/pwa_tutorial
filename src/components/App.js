import React, { Component } from 'react';
import './app.css';
import LoginContainer from './LoginContainer';

class App extends Component {
  render() {
    return (
      <div id="container" className="inner-container">
        <LoginContainer />
      </div>
    )
  }
}

export default App;
