import React, { Component } from 'react';
import  MapboxGL, {Layer,Feature,GeoJSONLayer} from 'react-mapbox-gl';
import {centros} from '../data/acevedo.json';

import {red} from '../geo/red.json';
import {poliacevedo} from '../geo/poliacevedo.json';
import {coffe} from '../geo/coffe.json';
import {CV0101} from '../geo/0101.json';
import {CV0102} from '../geo/0102.json';
import {CV0103} from '../geo/0103.json';

import {CV0104} from '../geo/0104.json';
import {CV0105} from '../geo/0105.json';
import {CV0106} from '../geo/0106.json';
import {CV0107} from '../geo/0107.json';
import {CV0108} from '../geo/0108.json';
import {CV0109} from '../geo/0109.json';
import {CV0110} from '../geo/0110.json';
import {CV0111} from '../geo/0111.json';
import {CV0112} from '../geo/0112.json';
import {CV0113} from '../geo/0113.json';
import {CV0114} from '../geo/0114.json';

import {CV0115} from '../geo/0115.json';
import {CV0116} from '../geo/0116.json';
import {CV0117} from '../geo/0117.json';
import {CV0118} from '../geo/0118.json';

import {CV0119} from '../geo/0119.json';
import {CV0120} from '../geo/0120.json';
import {CV0121} from '../geo/0121.json';
import {CV0122} from '../geo/0122.json';
import MapPopup from './mappopup';

const popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}

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
    nuevodefensor:{},
    poligono01:[],
    poligono02:[],
    poligono03:[],
    poligono04:[],
    poligono05:[],
    poligono06:[],
    poligono07:[],
    poligono08:[],
    poligono09:[],
    poligono10:[],
    poligono11:[],
    poligono12:[],
    poligono13:[],
    poligono14:[],
    poligono15:[],
    poligono16:[],
    poligono17:[],
    poligono18:[],
    poligono19:[],
    poligono20:[],
    
    poligono21:[],
    poligono22:[],
    red:null,
    coffe:null
};
this.onFeatureClick = this.onFeatureClick.bind(this)
this.onFeatureMouseEnter = this.onFeatureMouseEnter.bind(this)
this.onFeatureMouseLeave = this.onFeatureMouseLeave.bind(this)   
    
}
componentDidMount() {
     this.setState({nodos:centros})
    this.setState({comentario:"sin"})
    this.setState({red:red})
    this.setState({coffe:coffe})
    this.setState({poligono01:CV0101.features[0].geometry.coordinates})
    this.setState({poligono02:CV0102.features[0].geometry.coordinates})
    this.setState({poligono03:CV0103.features[0].geometry.coordinates})
    
    this.setState({poligono04:CV0104.features[0].geometry.coordinates})
    this.setState({poligono05:CV0105.features[0].geometry.coordinates})
    this.setState({poligono06:CV0106.features[0].geometry.coordinates})
    this.setState({poligono07:CV0107.features[0].geometry.coordinates})
    this.setState({poligono08:CV0108.features[0].geometry.coordinates})
    this.setState({poligono09:CV0109.features[0].geometry.coordinates})
    this.setState({poligono10:CV0110.features[0].geometry.coordinates})
    this.setState({poligono11:CV0111.features[0].geometry.coordinates})
    this.setState({poligono12:CV0112.features[0].geometry.coordinates})
    this.setState({poligono13:CV0113.features[0].geometry.coordinates})
    this.setState({poligono14:CV0114.features[0].geometry.coordinates})
    this.setState({poligono15:CV0115.features[0].geometry.coordinates})
    this.setState({poligono16:CV0116.features[0].geometry.coordinates})
    this.setState({poligono17:CV0117.features[0].geometry.coordinates})
    this.setState({poligono18:CV0118.features[0].geometry.coordinates})
    this.setState({poligono19:CV0119.features[0].geometry.coordinates})
    this.setState({poligono20:CV0120.features[0].geometry.coordinates})
    this.setState({poligono21:CV0121.features[0].geometry.coordinates})
    this.setState({poligono22:CV0122.features[0].geometry.coordinates})
 
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
     
     const {red,coffe, nodos ,poligono01,poligono02,poligono03,poligono04,poligono05,poligono06,poligono07,poligono08,poligono09,poligono10,poligono11,poligono12,poligono13,poligono14,poligono15,poligono16,poligono17,poligono18,poligono19,poligono20,poligono21,poligono22} = this.state;
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
     
     <GeoJSONLayer
   key={"g1"}
   data={red}
   fillPaint={polygonPaint}
/>
<GeoJSONLayer
          data={coffe}
          circleLayout={circleLayout}
          circlePaint={circlePaint}
         
          symbolLayout={symbolLayout}
          symbolPaint={symbolPaint}
        />

     <Layer key={"polygonKeyA"} type="fill" paint={this.getPolygonPaint('lightyellow')}>
    <Feature coordinates=
    {poliacevedo}
     />
 </Layer> 
  <Layer type="circle" radius={100} color={ 'green'} fillColor= 'green' 
       fillOpacity= {0.5} paint={this.getCirclePaint('purple')}> 
      {centroslayer}
 </Layer>


 
 <Layer key={"polygonKey1"} type="fill" paint={this.getPolygonPaint('orange')}>
    <Feature coordinates={poligono01}/>
 </Layer>
 
 <Layer key={"polygonKey10"} type="fill" paint={this.getPolygonPaint('navy')}>
    <Feature coordinates={poligono02}/>
 </Layer>
 <Layer key={"polygonKey11"} type="fill" paint={this.getPolygonPaint('maroon')}>
    <Feature coordinates={poligono03}/>
 </Layer>
 <Layer key={"polygonKey7"} type="fill" paint={this.getPolygonPaint('orange')}>
    <Feature coordinates={poligono04}/>
 </Layer>
 <Layer key={"polygonKey12"} type="fill" paint={this.getPolygonPaint('darkblue')}>
    <Feature coordinates={poligono05}/>
 </Layer>
 
 <Layer key={"polygonKey13"} type="fill" paint={this.getPolygonPaint('red')}>
    <Feature coordinates={poligono06}/>
 </Layer>
 <Layer key={"polygonKey14"} type="fill" paint={this.getPolygonPaint('green')}>
    <Feature coordinates={poligono07}/>
 </Layer>

 <Layer key={"polygonKey15"} type="fill" paint={this.getPolygonPaint('orange')}>
    <Feature coordinates={poligono08}/>
 </Layer>
 <Layer key={"polygonKey16"} type="fill" paint={this.getPolygonPaint('red')}>
    <Feature coordinates={poligono09}/>
 </Layer>
 
 <Layer key={"polygonKey17"} type="fill" paint={this.getPolygonPaint('navy')}>
    <Feature coordinates={poligono10}/>
 </Layer>
 <Layer key={"polygonKey18"} type="fill" paint={this.getPolygonPaint('green')}>
    <Feature coordinates={poligono11}/>
 </Layer>
 <Layer key={"polygonKey19"} type="fill" paint={this.getPolygonPaint('gray')}>
    <Feature coordinates={poligono12}/>
 </Layer>
 <Layer key={"polygonKey6"} type="fill" paint={this.getPolygonPaint('red')}>
    <Feature coordinates={poligono13}/>
 </Layer>
 <Layer key={"polygonKey20"} type="fill" paint={this.getPolygonPaint('black')}>
    <Feature coordinates={poligono14}/>
 </Layer>
 <Layer key={"polygonKey21"} type="fill" paint={this.getPolygonPaint('green')}>
    <Feature coordinates={poligono15}/>
 </Layer>
 <Layer key={"polygonKey22"} type="fill" paint={this.getPolygonPaint('gray')}>
    <Feature coordinates={poligono16}/>
 </Layer>
 <Layer key={"polygonKey23"} type="fill" paint={this.getPolygonPaint('red')}>
    <Feature coordinates={poligono17}/>
 </Layer>


<Layer key={"polygonKey25"} type="fill" paint={this.getPolygonPaint('green')}>
    <Feature coordinates={poligono18}/>
 </Layer>
 <Layer key={"polygonKey5"} type="fill" paint={this.getPolygonPaint('purple')}>
    <Feature coordinates={poligono19}/>
 </Layer>
 <Layer key={"polygonKey26"} type="fill" paint={this.getPolygonPaint('gray')}>
    <Feature coordinates={poligono20}/>
 </Layer>
 <Layer key={"polygonKey27"} type="fill" paint={this.getPolygonPaint('red')}>
    <Feature coordinates={poligono21}/>
 </Layer>
 <Layer key={"polygonKey28"} type="fill" paint={this.getPolygonPaint('black')}>
    <Feature coordinates={poligono22}/>
 </Layer>
      
     </div>
      )
  
}
}
export default MapLayerCentros;
