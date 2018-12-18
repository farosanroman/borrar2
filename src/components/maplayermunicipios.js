import React, { Component } from 'react';
//import {Layer,Feature} from 'react-mapbox-gl';
import  MapboxGL, {Layer,Feature,GeoJSONLayer} from 'react-mapbox-gl';
import MapGeoJSONLayer from './mapgeojsonlayer';
import {resumen} from '../data/resumen.json';
//import {e010000} from '../geo/010000.json';
//import {e020000} from '../geo/020000.json';
//import {nuevaesparta} from '../geo/nuevaesparta.json';
//import {Popup} from 'react-mapbox-gl';
//var ReactMapboxGl = require("react-mapbox-gl");

//import {tendencias,roles} from '../data/tablas.json';
//import {observadores} from '../data/observadores.json';

//https://mpv.cenditel.gob.ve/cadenas/browser/observatorio/procesos/apps/geocadena/media/geojson?rev=4b459a71f72c425396d545c0dcf9ec6dca20171a&order=name#municipios
class MapLayerMunicipios extends Component {
 

constructor(props) {
  super(props);
  this.state = { 
    nodos:resumen,
    popupType:"msg",
    poly01:null,
    
    config:null,
    geojson:[],
    isLoading: false,
    error:null,
  };
    
    
}
componentDidMount() {
  this.setState({ isLoading: true });
  //alert(this.props.idestado+" "+this.props.idformulario)
 // alert(JSON.stringify(this.props.formulario))
  var url="https://f18.azurewebsites.net/api/GeoJSONGet?code=71Esf7JNvNa2WkN5beemvAEXhK0GhAmrSoTZaMHpKKNn9mDrhxFKdw=="
  //console.log(url)
  fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong ...');
    }
  })
 .then(results => this.setState({geojson:results ,isLoading:false}))
 .catch(error => this.setState({ error, isLoading: false }));
  }
getCirclePaint = (color) => ({
    'circle-radius': 4,
    'circle-color': color,
    'circle-opacity': 0.8
  });
  getPolygonPaint = (color) => (MapboxGL.FillPaint = {
    'fill-color': color,
    'fill-opacity': 0.2,
    'line-color': 'blue',
    'line-width': 6
  });
render() { 
  const {poly01,nuevaesparta,geojson,error,isLoading} = this.state;
  if (error) {
    return <p>{error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  
     const geoJSON=geojson.map(geo=>{
      return(
        <MapGeoJSONLayer key={geo.id} poligono={geo}/>
           )
     } )  
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
       fillOpacity= {0.5} paint={this.getCirclePaint('red')}> 
     
        </Layer>
      {geoJSON}
       
</div>
)
  
}
}
export default MapLayerMunicipios;