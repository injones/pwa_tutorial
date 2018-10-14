import React, { Component } from 'react';
import './app.css';
import LoginContainer from './LoginContainer';

class App extends Component {
  state = { user: null };

  componentDidMount(){
    firebase
    .auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    })
  }

  render() {
    return (
      <div id="container" className="inner-container">
        <LoginContainer />
      </div>
    )
  }
}

export default App;
