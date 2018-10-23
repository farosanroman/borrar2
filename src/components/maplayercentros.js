import React, { Component } from 'react';
import  MapboxGL, {Layer,Feature,GeoJSONLayer} from 'react-mapbox-gl';
import {centros} from '../data/centros.json';
import {green} from '../geo/green.json';
import {red} from '../geo/red.json';
import {blue} from '../geo/blue.json';
import {acevedo} from '../geo/munacevedo.json';
import MapPopup from './mappopup';
//import {Popup} from 'react-mapbox-gl';
//var ReactMapboxGl = require("react-mapbox-gl");

//import {tendencias,roles} from '../data/tablas.json';
//import {observadores} from '../data/observadores.json';
const popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}

let centro=[-66.45286,10.3]
let zoom=[8]
let polygonPaint = MapboxGL.FillPaint = {
  'fill-color': "#ff0000",
  'fill-opacity': 0.3
}
let polygonPaintY = MapboxGL.FillPaint = {
  'fill-color': "yellow",
  'fill-opacity': 0.1
}
let polygonPaintB = MapboxGL.FillPaint = {
  'fill-color': "blue",
  'fill-opacity': 0.3
}
let polygonPaintG = MapboxGL.FillPaint = {
  'fill-color': "green",
  'fill-opacity': 0.3
}
class MapLayerCentros extends Component {
 

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
this.onFeatureClick = this.onFeatureClick.bind(this)
this.onFeatureMouseEnter = this.onFeatureMouseEnter.bind(this)
this.onFeatureMouseLeave = this.onFeatureMouseLeave.bind(this)   
    
}
componentDidMount() {
    console.log('El componente está disponible en el DOM');
    // Pedimos algunos datos
    //this.setState({nodos:[{"id":0,"nombre":"UNIDAD EDUCATIVA DISTRITAL PASTORA LANDAEZ","latlng":[-66.9099,10.499]},{"id":1,"nombre":"UNIDAD EDUCATIVA MARIA ROSA MOLAS FE Y ALEGRIA","latlng":[-66.96723,10.53164]},{"id":2,"nombre":"COLEGIO DE EDUCACIÒN INTEGRAL DOCTOR RAUL LEONIS","latlng":[-66.96723,10.53164]},{"id":3,"nombre":"LICEO BOLIVARIANO PEDRO EMILIO COLL","latlng":[-66.92489,10.45352]},{"id":4,"nombre":"UNIDAD EDUCATIVA DISTRITAL MANUEL ANTONIO CARREÑO","latlng":[-66.94229,10.49292]}]}
    this.setState({nodos:centros})
    this.setState({comentario:"sin"})
    console.log(centros)
  }
getCirclePaint = (color) => ({
    'circle-radius': 4,
    'circle-color': color,
    'circle-opacity': 0.8
  });
  onFeatureMouseEnter(evt) {
    
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
    this.setState({popupInfo:pop})
    this.setState({popupType:"msg"})
    this.setState({comentario:pop.nombre})
    
   }
   onFeatureClick(evt) {
    
    this.setState({zoom:[8]})
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
 // let pop={"coordinates":JSON.parse(evt.feature.properties.latlng),"nombre":evt.feature.properties.nombre}
   this.setState({popupInfo:pop})
   this.setState({popupType:"form"})
   console.log(this.state.popupInfo)
   console.log("onFeatureClick ----------")
    //this.setState({dummy:"bbbb"})
    
  }
   onFeatureMouseLeave(e) {
    
    if (this.state.popupType==="msg"){
     this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})
     //const fecha=new Date();
     //this.setState({comentario:fecha})
    }
 }
   onPopupClose(e) {
    
     this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})
     
 }

render() { 
     //console.log(this.state.center)
     console.log("centrooooooo")
     const { nodos } = this.state;
     //const parroquiasf0 = this.state.nodos.filter(r => (r.nivel === 7)&&(r.OBSERVADOR===0));
     var i;
     const centroslayer=centros.map(cv=>{
       i+=1;
        return(
          <Feature key={i}   coordinates={[cv.lng,cv.lat]} 
          />
            )
      } )  
      
    
      return (
      <div className= "Popup">
     
    
       <Layer type="circle" radius={100} color={ 'green'} fillColor= 'green' 
       fillOpacity= {0.5} paint={this.getCirclePaint('purple')}> 
      {centroslayer}
 </Layer>
<Layer key={"polygonKeyG"} type="fill" paint={polygonPaintG}>
    <Feature coordinates=
    {green}
     />
 </Layer>

<Layer key={"polygonKeyB"} type="fill" paint={polygonPaintB}>
    <Feature coordinates={blue}/>
 </Layer>
<Layer key={"polygonKey"} type="fill" paint={polygonPaint}>
    <Feature coordinates={red}/>
 </Layer>
 <Layer key={"polygonKey"} type="fill" paint={polygonPaintY}>
    <Feature coordinates={acevedo}/>
 </Layer>


        
    
       
     </div>
      )
  
}
}
export default MapLayerCentros;