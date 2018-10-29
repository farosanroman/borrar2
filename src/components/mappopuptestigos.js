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
  
  console.log("poooooupinfo")
  console.log(popupinfo)
  console.log(popupinfo.testigos)
  console.log("poooooupinfo centro")
  //console.log(popupinfo.properties.centro)
  var t=[{"nombre":"Luis"},{"nombre":"Jose"},{"nombre":"Pedro"}]
  const tt=popupinfo.testigos
  //t=popupinfo.testigos
  console.log(tt)
  var ttt=[]
  
 // for (var i = 0; i < tt.length; i++) { 
 //   ttt.push(tt[i]);
//}
var telefonos=[]
  
  if (tt!=undefined){  
  telefonos=tt.map(p=>{
    return(
       <li>{p.nombre}-{p.celular}</li>
         )
         } 
     )
        }else{
        
        }
      return (
      <div className= "Popup">
         <Popup       
        key={1}
        coordinates={popupinfo.coordinates}
        offset={{'bottom-left': [0, -0],  'bottom': [0, -1], 'bottom-right': [-0, -1]}}
            
       // onClick={this.onPopupClick.bind(this)}            
>
     <h3>{popupinfo.centro}</h3>
     {telefonos}
     </Popup>
   </div>
       )
      
  }
}
export default MapPopupTestigos;