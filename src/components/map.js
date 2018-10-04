import React, { Component } from 'react';
import MapGL,{Layer,Feature,ZoomControl} from 'react-mapbox-gl';
//import {centros} from '../data/geojson.json';
import {resumen} from '../data/resumen.json';
import PopupNodo from './popupnodo';
import {tendencias,roles,evaluacion,correos} from '../data/tablas.json';
import styled ,{csc} from 'styled-components';
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
      nodos:[],
      comentario:"comentario",      
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
  componentDidMount() {
    console.log('El componente está disponible en el DOM');
    // Pedimos algunos datos
    //this.setState({nodos:[{"id":0,"nombre":"UNIDAD EDUCATIVA DISTRITAL PASTORA LANDAEZ","latlng":[-66.9099,10.499]},{"id":1,"nombre":"UNIDAD EDUCATIVA MARIA ROSA MOLAS FE Y ALEGRIA","latlng":[-66.96723,10.53164]},{"id":2,"nombre":"COLEGIO DE EDUCACIÒN INTEGRAL DOCTOR RAUL LEONIS","latlng":[-66.96723,10.53164]},{"id":3,"nombre":"LICEO BOLIVARIANO PEDRO EMILIO COLL","latlng":[-66.92489,10.45352]},{"id":4,"nombre":"UNIDAD EDUCATIVA DISTRITAL MANUEL ANTONIO CARREÑO","latlng":[-66.94229,10.49292]}]}
    this.setState({nodos:resumen})
    this.setState({comentario:"sin"})
    
  }
  

  onFeatureClick(evt) {
    
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
   
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
    this.setState({popupInfo:pop})
    this.setState({popupType:"msg"})
    this.setState({comentario:pop.nombre})
    
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
 getCirclePaint = (color) => ({
  'circle-radius': 4,
  'circle-color': color,
  'circle-opacity': 0.6
});

    render() {
      //const { styleKey } = this.state;
    const { nodos,comentario } = this.state;
    const Button = styled.button`
    border: 1px solid #3770c6;
  background-color: rgb(84, 152, 255);
  height: 100%;
  color: white;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #3770c6;
  };`
    ;
      const Container = styled.div`
      position: relative;
      height: 100%;
      flex: 1;
    `;
      
      const BottomBar = styled.div`
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
    const Indicator = styled.div`
      padding: 6px 10px;
      background-color: white;
    `;
    
     
      const municipiosf = nodos.filter(r => r.nivel === 5);
      const municipios=municipiosf.map(cv=>{
        return(
           <Feature key={cv.id} popuptype={this.state.popupType} onMouseEnter={this.onFeatureMouseEnter} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } )  
       const parroquiasf0 = nodos.filter(r => (r.nivel === 7)&&(r.OBSERVADOR===0));
      const parroquias0=parroquiasf0.map(cv=>{
        return(
           <Feature key={cv.id} popuptype={this.state.popupType} properties={cv} onMouseEnter={this.onFeatureMouseEnter} onMouseLeave={this.onFeatureMouseLeave} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } )  
       
       const parroquiasf = nodos.filter(r => (r.nivel === 7)&&(r.OBSERVADOR>0));
      const parroquias=parroquiasf.map(cv=>{
        return(
           <Feature key={cv.id} popuptype={this.state.popupType} properties={cv} onMouseEnter={this.onFeatureMouseEnter} onMouseLeave={this.onFeatureMouseLeave} onClick={this.onFeatureClick}  coordinates={cv.latlng} 
           />
             )
       } ) 
        
           let tendenciasOpciones=tendencias.map(t=>{
     
            return(
               <option key={t.idt} value={t.idy}>{t.tendencia}</option>
                 )
           } )
           let evaluacionOpciones=evaluacion.map(t=>{
     
            return(
               <option key={t.ide} value={t.ide}>{t.puntos}</option>
                 )
           } )
           let correosOpciones=correos.map(t=>{
     
            return(
               <option key={t.idc} value={t.idc}>{t.correo}</option>
                 )
           } )
        //console.log(features)
        //this.setState({comentario:"otra mas"})
        return(
        <div>
        <Button>Municipios</Button><Button>Parroquias</Button>
        <label>Tendencia:</label>
        <select ref="tendencia">
              {tendenciasOpciones}
            </select>
            <label>Evaluacion:</label>
            <select ref="evaluacion">
              {evaluacionOpciones}
            </select>
            <label>Calidad de Correos:</label>
            <select ref="correos">
              {correosOpciones}
            </select>
        <Map        
          style={"mapbox://styles/mapbox/light-v9"}
          center={centro} 
          zoom={zoom}
          containerStyle={{height: "80vh",width: "80vw"}}
        > 
        <Layer type="circle" radius={20} color={ 'blue'} fillColor= '#f05' 
       fillOpacity= {0.5} paint={this.getCirclePaint('blue')}> 
      {parroquias}
        </Layer>
        <Layer type="circle" radius={20} color={ 'red'} fillColor= '#f03' 
       fillOpacity= {0.5} paint={this.getCirclePaint('red')}> 
      {parroquias0}
        </Layer>
        <Layer
                type="symbol"
                id="marker3"
                layout={{
                  "icon-image": "marker-15",
                  "icon-allow-overlap": true,
                  "text-field": "Ejemplo de Texto",
                  "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                  "text-size": 11,
                  "text-transform": "uppercase",
                  "text-letter-spacing": 0.05,
                  "text-offset": [0, 1.5]
                }}>
               <Feature
                 coordinates={[-62,5]}
                />
            </Layer>
          
     <PopupNodo key={111} popupnodotype={this.state.popupType} popupnodoinfo={this.state.popupInfo}  />
          
          <ZoomControl position={"bottomRight"} />
          </Map>
          <BottomBar>
         
          <Indicator>{`${comentario}`}</Indicator>
        </BottomBar>
          </div>
        )    
     }
 }
export default Map2;
/*
https://github.com/alex3165/react-mapbox-gl/blob/master/example/src/demos/allShapes.tsx
 <Layer
              type="symbol"
              id="marker2"
              layout={{ 'icon-allow-overlap': true, "icon-image": "embassy-15" }}
             
             >            
               {parroquias0}
          </Layer>

                 */