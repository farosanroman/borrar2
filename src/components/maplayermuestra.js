import React, { Component } from 'react';
import  MapboxGL, {Layer,Feature,GeoJSONLayer} from 'react-mapbox-gl';

import {red} from '../geo/red.json';
import {muestra} from '../data/muestra.json';
import {coffe} from '../geo/coffe.json';

import MapPopupTestigos from './mappopuptestigos';
//import {Popup} from 'react-mapbox-gl';
//var ReactMapboxGl = require("react-mapbox-gl");
//https://stackoverflow.com/questions/49059467/display-polygon-in-react-mapbox-gl
//import {tendencias,roles} from '../data/tablas.json';
//import {observadores} from '../data/observadores.json';
const popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}
//console.log(muestra)
let centro=[-66.45286,10.3]
let zoom=[8]
let polygonPaint = MapboxGL.FillPaint = {
  'fill-color': "blue",
  'fill-opacity': 0.2
}
const symbolLayout= MapboxGL.SymbolLayout = {
  'text-field': '{place}',
  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  'text-offset': [0, 0.6],
  'text-anchor': 'top'
};
const symbolPaint= MapboxGL.SymbolPaint = {
  'text-color': 'black'
};

const circleLayout= MapboxGL.CircleLayout = { visibility: 'visible' };
const circlePaint= MapboxGL.CirclePaint = {
  'circle-color': 'black'
};
class MapLayerMuestra extends Component {
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
    nuevodefensor:{},    
    red:null,
    coffe:null,
    idestrato:0
  
};
this.onFeatureClick = this.onFeatureClick.bind(this)
this.onFeatureMouseEnter = this.onFeatureMouseEnter.bind(this)
this.onFeatureMouseLeave = this.onFeatureMouseLeave.bind(this)   
    
}
componentDidMount() {
 // alert("this.props.propidestrato"+this.props.propidestrato)
   // console.log('El componente está disponible en el DOM');
    // Pedimos algunos datos
    //this.setState({nodos:[{"id":0,"nombre":"UNIDAD EDUCATIVA DISTRITAL PASTORA LANDAEZ","latlng":[-66.9099,10.499]},{"id":1,"nombre":"UNIDAD EDUCATIVA MARIA ROSA MOLAS FE Y ALEGRIA","latlng":[-66.96723,10.53164]},{"id":2,"nombre":"COLEGIO DE EDUCACIÒN INTEGRAL DOCTOR RAUL LEONIS","latlng":[-66.96723,10.53164]},{"id":3,"nombre":"LICEO BOLIVARIANO PEDRO EMILIO COLL","latlng":[-66.92489,10.45352]},{"id":4,"nombre":"UNIDAD EDUCATIVA DISTRITAL MANUEL ANTONIO CARREÑO","latlng":[-66.94229,10.49292]}]}
    this.setState({nodos:muestra})
    this.setState({comentario:"sin"})
    this.setState({red:red})
    this.setState({coffe:coffe})
   this.setState({idestrato:this.props.propidestrato}) 
   
  }
  
  getPolygonPaint = (color) => (MapboxGL.FillPaint = {
    'fill-color': color,
    'fill-opacity': 0.3
  });
getCirclePaint = (color) => ({
    'circle-radius': 4,
    'circle-color': color,
    'circle-opacity': 0.8
  });
  onFeatureMouseEnter(evt) {
    console.log("evt evt evt evt evt")
    console.log(evt)
    const lnglat=[evt.feature.properties.lng,evt.feature.properties.lat]
    //console.log(lnglat)
    //alert(lnglat[0])
    //alert(evt.feature.properties.latlng)
    //const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    //this.setState({center:lnglat})
    this.setState({center:[-66.45286,10.3]})
    //this.setState({popupInfo:pop})
    this.setState({popupType:"msg"})
    this.setState({comentario:"pop.nombre"})
    const pop={coordinates:lnglat,centro:evt.feature.properties.centro,nombre:evt.feature.properties.nombre,celular:evt.feature.properties.celular,correo:evt.feature.properties.correo};
    this.setState({popupInfo:pop})
    
   }
   onFeatureClick(evt) {
    
    this.setState({zoom:[8]})
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
 // let pop={"coordinates":JSON.parse(evt.feature.properties.latlng),"nombre":evt.feature.properties.nombre}
   this.setState({popupInfo:pop})
   this.setState({popupType:"form"})
  // console.log(this.state.popupInfo)
   //console.log("onFeatureClick ----------")
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
 // alert("render muestra"+this.props.propidestrato)
     //console.log(this.state.center)
    const idestrato=this.props.propidestrato*1
    //const idestrato=3
     const {red,coffe, nodos } = this.state;
     //const parroquiasf0 = this.state.nodos.filter(r => (r.nivel === 7)&&(r.OBSERVADOR===0));
    
     var i;
     let nodose=nodos;
     //alert(idestrato)
     if (idestrato>0){
     nodose = nodos.filter(r => (r.e === idestrato));
     }
     const muestralayer=nodose.map(cv=>{
      // if (idestrato===cv.e){
       i+=1;
        return(
          <Feature key={i} properties={cv}   coordinates={[cv.lng,cv.lat]} 
          onMouseEnter={this.onFeatureMouseEnter} onMouseLeave={this.onFeatureMouseLeave}
          />
            )
      //}
    }
      )  
      
    
      return (
      <div className= "Popup">
     
     


  <Layer type="circle" radius={100} color={ 'green'} fillColor= 'green' 
       fillOpacity= {0.5} paint={this.getCirclePaint('red')}> 
      {muestralayer}
 </Layer>


 
  <MapPopupTestigos key={111} popupnodotype={this.state.popupType} popupnodoinfo={this.state.popupInfo}  />
       
     </div>
      )
  
}
}
export default MapLayerMuestra;
/*
<Layer key={"polygonKey9"} type="fill" paint={this.getPolygonPaint('fuchsia')}>
    <Feature coordinates={poligono01}/>
 </Layer>
 
 */