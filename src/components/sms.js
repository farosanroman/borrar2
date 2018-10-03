import React from 'react';
import sms from '../images/sms.png';
function ResponsiveImage( { src, width, height } ) {
  return (
    <div
      style={ { width } }
      className="responsive-image">
      <div style={ { paddingBottom: ( height / width * 100 ) + '%' } } />
      <img
        src={ src }
        className="responsive-image__image" alt=""/>
    </div>
  );
}
class Sms extends React.Component {
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
          src={sms}
          width={ 1000 }
          height={ 500 } 
      />
     
      </div>
      );
    }
  }

export default Sms;