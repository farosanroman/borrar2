import React, { Component } from 'react';
import {Layer,Feature} from 'react-mapbox-gl';
import {resumen} from '../data/resumen.json';
//import {Popup} from 'react-mapbox-gl';
//var ReactMapboxGl = require("react-mapbox-gl");

//import {tendencias,roles} from '../data/tablas.json';
//import {observadores} from '../data/observadores.json';
class MapLayerMunicipios extends Component {
 

constructor(props) {
  super(props);
  this.state = { 
    nodos:resumen,
    popupType:"msg",
    config:null };
    
}
getCirclePaint = (color) => ({
    'circle-radius': 10,
    'circle-color': color,
    'circle-opacity': 0.3
  });
render() { 
     
    const municipiosf = this.state.nodos.filter(r => r.nivel === 5);
      const municipios=municipiosf.map(cv=>{
        return(
           <Feature key={cv.id} popuptype={this.state.popupType} onMouseEnter={this.onFeatureMouseEnter} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } )  
      return (
      <div className= "Popup">
   <Layer type="circle" radius={100} color={ 'green'} fillColor= 'green' 
       fillOpacity= {0.5} paint={this.getCirclePaint('green')}> 
      {municipios}
        </Layer>
     </div>
      )
  
}
}
export default MapLayerMunicipios;