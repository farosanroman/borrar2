import React, { Component } from 'react';
import Main from './components/main'
import logo from './logo.png';
import './App.css';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
       <Main></Main>
      </div>
      </Router>
    );
  }
}

export default App;
