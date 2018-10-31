import React, { Component } from 'react';
import {Popup} from 'react-mapbox-gl';
 
class MapPopupTestigos extends Component {


constructor(props) {
  super(props);
  this.state = { 
    identificacion:"v3333333333", 
    correo:"ppazzzz@gmail.com",
    telefono:"041289828928", 
    idr:1,   
    config:null };
    //this.onChangeFunc = this.onChangeFunc.bind(this)
}


render() {
  //alert("testigos")
  const popupinfo=this.props.popupnodoinfo 
  const properties=this.props.properties
  
 
 
      return (
      <div className= "Popup">
         <Popup       
        key={1}
        coordinates={popupinfo.coordinates}
        offset={{'bottom-left': [0, -0],  'bottom': [0, -1], 'bottom-right': [-0, -1]}}
            
       // onClick={this.onPopupClick.bind(this)}            
>
     <h6>{popupinfo.centro}</h6>
     <h6>{popupinfo.nombre}</h6>
     <h6>{popupinfo.celular}</h6>
     <h6>{popupinfo.correo}</h6>
    
     </Popup>
   </div>
       )
      
  }
}
export default MapPopupTestigos;