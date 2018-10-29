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
    console.log('El componente está disponible en el DOM');
    // Pedimos algunos datos
    //this.setState({nodos:[{"id":0,"nombre":"UNIDAD EDUCATIVA DISTRITAL PASTORA LANDAEZ","latlng":[-66.9099,10.499]},{"id":1,"nombre":"UNIDAD EDUCATIVA MARIA ROSA MOLAS FE Y ALEGRIA","latlng":[-66.96723,10.53164]},{"id":2,"nombre":"COLEGIO DE EDUCACIÒN INTEGRAL DOCTOR RAUL LEONIS","latlng":[-66.96723,10.53164]},{"id":3,"nombre":"LICEO BOLIVARIANO PEDRO EMILIO COLL","latlng":[-66.92489,10.45352]},{"id":4,"nombre":"UNIDAD EDUCATIVA DISTRITAL MANUEL ANTONIO CARREÑO","latlng":[-66.94229,10.49292]}]}
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
   console.log(this.state.popupInfo)
   console.log("onFeatureClick ------------")
    //this.setState({dummy:"bbbb"})
    
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
     console.log(this.state.center)
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