import React, { Component } from 'react';
import venezuela from '../images/venezuela.jpg';
function ResponsiveImage( { src, width, height } ) {
  return (
    <div
      style={ { width } }
      className="responsive-image">
      <div style={ { paddingBottom: ( height / width * 100 ) + '%' } } />
      <img
        src={ src }
        className="responsive-image__image" />
    </div>
  );
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      dishes:null     
    };
    
  } 
  
  render() {
    
    return (            
      <div className="Appp">
      <ResponsiveImage
          src={venezuela}
          width={ 1200 }
          height={ 800 } 
      />
     
      </div>
      );
    }
  }

export default Home;