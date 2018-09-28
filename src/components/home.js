import React, { Component } from 'react';
import CursoCard from  '../components/cursocard'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dishes:null     
    };
  }  
  render() {
    
    return (            
      <div className="container">
            <h2>Home modo disenno...</h2>
      </div>
      );
    }
  }

export default Home;