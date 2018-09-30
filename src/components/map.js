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
      
      popupInfo:null,
      cvnombre:"",
      popupInfo:popupInfo0,
      nuevodefensor:{}
    }
    
  //console.log({centros})
    //this.renderPopup = this.renderPopup.bind(this)  
    this.onFeatureClick = this.onFeatureClick.bind(this)
    //this.onFeatureMouseEnter = this.onFeatureMouseEnter.bind(this)
    //this.onListMouseEnter = this.onListMouseEnter.bind(this)
    
    //this._onClickMap=this._onClickMap.bind(this)
    //this.handleSubmit=this.handleSubmit.bind(this)
    //this.onPopupClose=this.onPopupClose.bind(this) 
  }
 
  onFeatureClick(evt) {
    console.log(evt.feature.properties);
    console.log(evt.feature.properties.latlng);
        //console.log(pop)
    this.setState({zoom:[5]})
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
    //let pop={"coordinates":JSON.parse(evt.feature.properties.latlng),"nombre":evt.feature.properties.nombre}
   //this.setState({popupInfo:pop})
    //this.setState({dummy:"bbbb"})
    
  }
    render() {
      const municipiosf = resumen.filter(r => r.nivel === 5);
      const municipios=municipiosf.map(cv=>{
        return(
           <Feature key={cv.id} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } )  
       const parroquiasf0 = resumen.filter(r => (r.nivel === 7)&&(r.OBSERVADOR==0));
      const parroquias0=parroquiasf0.map(cv=>{
        return(
           <Feature key={cv.id} properties={cv} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } )   
       const parroquiasf = resumen.filter(r => (r.nivel === 7)&&(r.OBSERVADOR>0));
      const parroquias=parroquiasf.map(cv=>{
        return(
           <Feature key={cv.id} properties={cv} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
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
          <PopupNodo key={111} popupnodoinfo={popupInfo0}  />
          
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