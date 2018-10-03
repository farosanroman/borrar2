import React, { Component } from 'react';
import Main from './components/main'
//import logo from './logo.png';
import './App.css';
//import CursoCard from  './components/cursocard'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div >
      
       <Main></Main>
      </div>
      </Router>
    );
  }
}

export default App;
