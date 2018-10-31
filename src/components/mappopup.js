import React, { Component } from 'react';
import {Popup} from 'react-mapbox-gl';
//var ReactMapboxGl = require("react-mapbox-gl");

import {tendencias,roles} from '../data/tablas.json';
import {observadores} from '../data/observadores.json';
 
class MapPopup extends Component {



//https://stackoverflow.com/questions/51479592/react-submit-form-not-sending-post-request
constructor(props) {
  super(props);
  this.state = { 
    identificacion:"v3333333333", 
    correo:"ppazzzz@gmail.com",
    telefono:"041289828928", 
    idr:1,   
    config:null };
    this.onChangeFunc = this.onChangeFunc.bind(this)
}
onChangeFunc(event) {
  console.log("onChangeFunc")
  console.log(event.target.value)
  const persona = observadores.filter(r => r.identificacion === event.target.value);
  this.setState({telefono:persona[0].telefono})
  this.setState({correo:persona[0].correo})
  this.setState({identificacion:persona[0].identificacion})
  this.setState({idr:2})
  //const name = this.name;
  //const value = optionSelected.value;
  //const label = optionSelected.label;
  
}

onSubmit = (e) => {
  e.preventDefault();
//console.log(this.state)
//https://stackoverflow.com/questions/51479592/react-submit-form-not-sending-post-request
  //const { name, email, title, description } = this.state;

 //axios.post('/create', { name, email, title, description })
 //   .then((result) => {
 //     this.props.history.push("/")
 //   });


}
render() {
  //alert("popup")
  const { idr } = 3;
  const popupinfo=this.props.popupnodoinfo 
 
     let observadoresOpciones=observadores.map(o=>{       
      return(
         <option key={o.identificacion} value={o.identificacion}>{o.nombre}</option>
           )
     } )
     let rolesOpciones=roles.map(r=>{
       
      return(
         <option key={r.idr}  value={r.idr}>{r.rol}</option>
           )
     } )
     
    
      if (this.props.popupnodotype==="form"){
      return (
      <div className= "Popup">
   
   <Popup       
               key={1}
               coordinates={popupinfo.coordinates}
               offset={{'bottom-left': [0, -0],  'bottom': [0, -1], 'bottom-right': [-0, -1]}}
              // onClick={this.onPopupClick.bind(this)}            
     >
            <h3>{popupinfo.nombre}</h3>
            <div>
            <label>Padron:</label>
           
            <select ref="observador"  onChange={this.onChangeFunc}>
                {observadoresOpciones}
            </select>
            </div>
            <form onSubmit={this.onSubmit}>
             <div>
              <label>Cedula:</label>
              <input input type="text" ref="cedula" name="cedula" value={this.state.identificacion}  />
            </div>
            <div>
              <label>Correo:</label>
              <input type="text" ref="correo"  name="correo" value={this.state.correo} />
            </div>
            <div>
            <label>Telefono:</label>
             <input type="text" ref="telefono"  name="telefono" value={this.state.telefono} />
            </div>
            <div>
           
            <label>Rol:</label>
             <select ref="rol" value={this.state.idr}>
              {rolesOpciones}
            </select>
            </div>
            <div>
            <label>Tendencia:</label>
            <select onChange={this.handleChange} value={idr}>
                {tendencias.map(item => (
                <option key={item.idr} value={item.idt}>
                  {item.tendencia}
                </option>
                ))}
            </select>
            </div>
            <input type="submit" value="Submit" />
            <input type="button"  onClick={this.props.onpopupclose} value="X" />
           
         </form>
         <h4>{"observacion"}</h4>
  </Popup>
        
      </div>
    )
      }else{
        return (
          <div className= "Popup">
        <Popup       
        key={1}
        coordinates={popupinfo.coordinates}
        offset={{'bottom-left': [0, -0],  'bottom': [0, -1], 'bottom-right': [-0, -1]}}
            
       // onClick={this.onPopupClick.bind(this)}            
>
     <h3>{popupinfo.nombre}</h3>
     </Popup>
     </div>
     )
      }
  }
}
export default MapPopup;