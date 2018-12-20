import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/user/Users';
import User from './components/user/User';
import MyProvider, { MyContext } from './Provider';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App container">
          {/* <header className="App-header" /> */}
          <Users />
          <User />
        </div>
      </MyProvider>
    );
  }
}

export default App;
