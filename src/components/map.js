import React, { Component } from 'react';
import MapGL,{Layer,Feature,Polygon,Popup,ZoomControl} from 'react-mapbox-gl';
import {centros} from '../data/geojson.json';
import {resumen} from '../data/resumen.json';
import PopupNodo from './popupnodo';
//import Popup2 from './popup2';
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
const Map = MapGL({
  accessToken: TOKEN
});
//https://www.youtube.com/watch?v=I7WfxhF2wEg

//https://medium.com/@to_pe/deploying-create-react-app-on-microsoft-azure-c0f6686a4321



const iconByScianGroup = {
  1: 'doctor-15',
  2: 'dog-park-15',
  3: 'drinking-water-15',
  4: 'embassy-15',
  5: 'entrance-15',
  6: 'fast-food-15',
  7: 'ferry-15',
  8: 'fire-station-15',
  9: 'fuel-15',
  10: 'garden-15',
}
const popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}
console.log("App Inicio")
let centro=[-66.95286,7]
let zoom=[5]
class Map2 extends Component {    
  constructor(props){
    super(props);    
    this.state={
      heading:"Centros de Votacion",
      center:centro,
      zoom:zoom,    
      cvnombre:"",
      popupInfo:popupInfo0,
      nuevodefensor:{},
      popupType:"msg"
    }
    
  //console.log({centros})
    //this.renderPopup = this.renderPopup.bind(this)  
    this.onFeatureClick = this.onFeatureClick.bind(this)
    this.onFeatureMouseEnter = this.onFeatureMouseEnter.bind(this)
    this.onFeatureMouseLeave = this.onFeatureMouseLeave.bind(this)
    //this.onListMouseEnter = this.onListMouseEnter.bind(this)
    //this._onClickMap=this._onClickMap.bind(this)
    //this.handleSubmit=this.handleSubmit.bind(this)
    this.onPopupClose=this.onPopupClose.bind(this) 
  }
 
  onFeatureClick(evt) {
    console.log("onFeatureClick --------")
    console.log(evt.feature.properties);
    console.log("latlng"+evt.feature.properties.latlng);
        //console.log(pop)
    this.setState({zoom:[5]})
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
 // let pop={"coordinates":JSON.parse(evt.feature.properties.latlng),"nombre":evt.feature.properties.nombre}
   this.setState({popupInfo:pop})
   this.setState({popupType:"form"})
   console.log(this.state.popupInfo)
   console.log("onFeatureClick ----------")
    //this.setState({dummy:"bbbb"})
    
  }
  onFeatureMouseEnter(evt) {
    console.log("onFeatureMouseENter ----------")
    console.log(evt)
     //console.log(e.feature.properties.nombre)
     //this.setState({zoom:[5]})
     //this.props.popupType
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
 // let pop={"coordinates":JSON.parse(evt.feature.properties.latlng),"nombre":evt.feature.properties.nombre}
   this.setState({popupInfo:pop})
   this.setState({popupType:"msg"})
     console.log("e");
   }
   onFeatureMouseLeave(e) {
    console.log("App:mosu leave.................................. ")
    //console.log(e)
    if (this.state.popupType=="msg"){
     this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})
    }
 }
   onPopupClose(e) {
    console.log("App:popupclose.................................. ")
    //console.log(e)
     this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})
     
 }
    render() {
      const municipiosf = resumen.filter(r => r.nivel === 5);
      const municipios=municipiosf.map(cv=>{
        return(
           <Feature key={cv.id} popuptype={this.state.popupType} onMouseEnter={this.onFeatureMouseEnter} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } )  
       const parroquiasf0 = resumen.filter(r => (r.nivel === 7)&&(r.OBSERVADOR==0));
      const parroquias0=parroquiasf0.map(cv=>{
        return(
           <Feature key={cv.id} popuptype={this.state.popupType} properties={cv} onMouseEnter={this.onFeatureMouseEnter} onMouseLeave={this.onFeatureMouseLeave} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } )   
       const parroquiasf = resumen.filter(r => (r.nivel === 7)&&(r.OBSERVADOR>0));
      const parroquias=parroquiasf.map(cv=>{
        return(
           <Feature key={cv.id} popuptype={this.state.popupType} properties={cv} onMouseEnter={this.onFeatureMouseEnter} onMouseLeave={this.onFeatureMouseLeave} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } ) 
        let ccc=centros.map(centro=>{
            return(
               <Feature key={centro.id}  coordinates={centro.latlng} 
               />
                 )
           } )
           
        //console.log(features)
        return(
        <div className= "Map2">
        <button>Municipios</button><button>Parroquias</button><button>Tendencia</button>
        <Map        
          style={"mapbox://styles/mapbox/light-v9"}
          center={centro} 
          zoom={zoom}
          containerStyle={{height: "80vh",width: "80vw"}}
        > 
          <Layer
             type="symbol"
             id="marker2"
             layout={{ 'icon-allow-overlap': true, "icon-image": "marker-15" }}
             
             >            
               {parroquias}
          </Layer>
             <Layer
             type="circle" 
             radius={20} 
             color={ 'red'} 
             id="marker11"
             fillColor= 'red' fillOpacity= {0.5}             
             >            
               {parroquias0}
          </Layer>
          <Layer
                type="symbol"
                layout={{
                "icon-image": "harbor-15",
               "icon-allow-overlap": true,
               "field": "Put the text in here",
                "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                "text-size": 11,
                 "text-transform": "uppercase",
                "text-letter-spacing": 0.05,
                 "text-offset": [0, 1.5]
   
            }}>
               <Feature
                 coordinates={[-66,7]}
                />
            </Layer>
     <PopupNodo key={111} popupnodotype={this.state.popupType} popupnodoinfo={this.state.popupInfo}  />
          
          <ZoomControl position={"bottomRight"} />
          </Map>
          </div>
        )    
     }
 }
export default Map2;
/*
<Feature key={cv.id} properties={cv}  coordinates={cv.latlng} 
               onMouseEnter={this.props.onMouseEnter} onClick={this.props.onClick}/>
                 )

                 */