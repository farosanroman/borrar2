import React, { Component } from 'react';
//import {Layer,Feature} from 'react-mapbox-gl';
import  MapboxGL, {Layer,Feature,GeoJSONLayer} from 'react-mapbox-gl';
class MapGeoJSONLayer extends Component {
constructor(props) {
  super(props);
  this.state = { 
    popupType:"msg",
    poligono:this.props.poligono,
    config:null };
}
getColor(){
    const palette=['green','lightblue','deepskyblue',
    'dodgerblue','red','orange','purple','deeppink','orangered'
    ,'magenta','lime','goldenrod','brown','olive','gold','gray','fuchsia']
    var min = Math.ceil(17);
    var max = Math.floor(0);
    var pos= Math.floor(Math.random() * (max - min + 1)) + min;
    //var pos =Math.random() * (6 - 0) + 0; 
    //alert(pos)    
    return palette[pos]
}
getPolygonPaint = (color) => (MapboxGL.FillPaint = {
    'fill-color': color,
    'fill-opacity': 0.4
  });
getCirclePaint = (color) => ({
    'circle-radius': 4,
    'circle-color': color,
    'circle-opacity': 1.0
  });
render() { 
   // alert(JSON.stringify(this.props.poligono))
  const {poligono} = this.state;
    // console.log(poligono)
    
  let polygonPaint = MapboxGL.FillPaint = {
    'fill-color': "blue",
    'fill-opacity': 0.2
  }
    
      return (
      <div className= "Popup">
  
  <GeoJSONLayer
   key={"g01"}
   data={this.props.poligono}
   fillPaint={this.getPolygonPaint(this.getColor())}
/>

     </div>
      )
  
}
}
export default MapGeoJSONLayer;

