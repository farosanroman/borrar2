import React, { Component } from 'react';
import {Layer,Feature} from 'react-mapbox-gl';
import {resumen} from '../data/resumen.json';
import MapPopup from './mappopup';
//import {Popup} from 'react-mapbox-gl';
//var ReactMapboxGl = require("react-mapbox-gl");

//import {tendencias,roles} from '../data/tablas.json';
//import {observadores} from '../data/observadores.json';
const popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}

let centro=[-66.95286,7]
let zoom=[5]
class MapLayerParroquias extends Component {
 

constructor(props) {
  super(props);
  this.state = { 
    nodos:[],
    popupType:"msg",
    config:null,
    comentario:"comentario",      
    center:centro,
    zoom:zoom,    
    cvnombre:"",
    popupInfo:popupInfo0,
    nuevodefensor:{}    
};

this.onFeatureMouseEnter = this.onFeatureMouseEnter.bind(this)
this.onFeatureClick = this.onFeatureClick.bind(this)
this.onFeatureMouseLeave = this.onFeatureMouseLeave.bind(this)   
    
}
componentDidMount() {
     this.setState({nodos:resumen})
    this.setState({comentario:"sin"})
    
  }
getCirclePaint = (color) => ({
    'circle-radius': 4,
    'circle-color': color,
    'circle-opacity': 0.6
  });
  onFeatureMouseEnter(evt) {
    
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
    this.setState({popupInfo:pop})
    this.setState({popupType:"msg"})
    this.setState({comentario:pop.nombre})
    
   }
   onFeatureClick(evt) {
    
    this.setState({zoom:[5]})
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
 // let pop={"coordinates":JSON.parse(evt.feature.properties.latlng),"nombre":evt.feature.properties.nombre}
   this.setState({popupInfo:pop})
   this.setState({popupType:"form"})
   
  }
   onFeatureMouseLeave(e) {
    
    if (this.state.popupType==="msg"){
     this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})
     ///const fecha=new Date();
     //this.setState({comentario:fecha})
    }
 }
   onPopupClose(e) {
    
     this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})
     
 }
render() { 
    
     const parroquiasf0 = this.state.nodos.filter(r => (r.nivel === 7)&&(r.OBSERVADOR===0));
     const parroquias0=parroquiasf0.map(cv=>{
       return(
          <Feature key={cv.id} popuptype={this.state.popupType} properties={cv} onMouseEnter={this.onFeatureMouseEnter} onMouseLeave={this.onFeatureMouseLeave} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
          />
            )
      } )  
      
    const parroquiasf = this.state.nodos.filter(r => (r.nivel === 7)&&(r.FACILITADOR>0));
    const parroquias=parroquiasf.map(cv=>{
        return(
           <Feature key={cv.id} popuptype={this.state.popupType} properties={cv} onMouseEnter={this.onFeatureMouseEnter} onMouseLeave={this.onFeatureMouseLeave} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } ) 
      return (
      <div className= "Popup">
      <Layer type="circle" radius={100} color={ 'green'} fillColor= 'green' 
       fillOpacity= {0.5} paint={this.getCirclePaint('red')}> 
      {parroquias0}
        </Layer>
   <Layer type="circle" radius={100} color={ 'green'} fillColor= 'green' 
       fillOpacity= {0.5} paint={this.getCirclePaint('green')}> 
      {parroquias}
        </Layer>
        <MapPopup key={111} popupnodotype={this.state.popupType} popupnodoinfo={this.state.popupInfo}  />
     
     </div>
      )
  
}
}
export default MapLayerParroquias;