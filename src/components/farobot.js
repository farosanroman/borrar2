import React from 'react';
import venezuela from '../images/chatbot.png';
function ResponsiveImage( { src, width, height } ) {
  return (
    <div
      style={ { width } }
      className="responsive-image">
      <div style={ { paddingBottom: ( height / width * 100 ) + '%' } } />
      <img
        src={ src }
        className="responsive-image__image" alt="" />
    </div>
  );
}
class FaroBot extends React.Component {
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
          width={ 1000 }
          height={ 500 } 
      />
     
      </div>
      );
    }
  }

export default FaroBot;