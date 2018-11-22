import React, { Component } from 'react';
import MapGL,{Layer,Feature,ZoomControl} from 'react-mapbox-gl';
//import Chart from './chart';
import MapLayerMunicipios from './maplayermunicipios';
import MapLayerParroquias from './maplayerparroquias';
import MapLayerCentros from './maplayercentros';
import MapLayerMuestra from './maplayermuestra';
//import Formulario from './formulario';
import {resumen} from '../data/resumen.json';
//import {muestra} from '../data/muestra.json';
import {estratos,formularios} from '../data/tablas.json';
import styled  from 'styled-components';
//https://mpv.cenditel.gob.ve/cadenas/browser/observatorio/procesos/apps/geocadena/media/geojson?rev=4b459a71f72c425396d545c0dcf9ec6dca20171a&order=name
//import Popup2 from './popup2';
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
const Map = MapGL({
  accessToken: TOKEN
});
//https://www.youtube.com/watch?v=I7WfxhF2wEg

//https://medium.com/@to_pe/deploying-create-react-app-on-microsoft-azure-c0f6686a4321

const popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}

let centro=[-66.95286,8]
let zoom=[6]
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
      popupType:"msg",
      flagMunicipios:false,
      flagParroquias:false,
      flagCentros:true,
      flagMuestra:false,
      flagPopupTestigo:true,
      idformulario:1,
      idestrato:0,
      muestra:[],
      asignados:100
    }
    this.onMapClick = this.onMapClick.bind(this)
    this.onChangeEstrato=this.onChangeEstrato.bind(this)  
  }
  componentDidMount() { 
    this.setState({nodos:resumen})
    this.setState({comentario:"sin"})
    this.setState({popupInfo:popupInfo0})
    this.setState({popupType:"msg"})
    this.setState({comentario:popupInfo0.nombre})
  }
  onSetEstadisticas = (cant) => {
    
    this.setState({asignados:cant})
}
  onChangeEstrato(e) {
    this.setState({idestrato:e.target.value})
   // alert("onChangeEstrato"+e.target.value) 
  }

 getCirclePaint = (color) => ({
  'circle-radius': 4,
  'circle-color': color,
  'circle-opacity': 0.6
});
onMapClick = (e) => {
  console.log("onMapClick")
  this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})
  this.setState({flagPopupTestigo:false})  
}
onflagPopupTestigo=(e)=>{
  this.setState({flagPopupTestigo:true})  
}

onMClick = (e) => {
 
  this.setState({flagMunicipios:true})
  this.setState({flagParroquias:false})
  this.setState({flagCentros:false})
  this.setState({flagMuestra:false})
}
onPClick = (e) => {
  this.setState({flagMunicipios:false})
  this.setState({flagParroquias:true})
  this.setState({flagCentros:false})
  this.setState({flagMuestra:false})
  this.setState({zoom:[5]})
  this.setState({center:[-66.95286,7]})

}
onCClick = (e) => {
  this.setState({flagMunicipios:false})
  this.setState({flagParroquias:false})
  this.setState({flagCentros:true})
  this.setState({flagMuestra:false})
  this.setState({zoom:[9]})
  this.setState({center:[-66.65286,10.3]})
}
onMuestraClick = (e) => {
  //window.open("https://polidata.azurewebsites.net/#observacion?cedula=v3664204","_blank")
  
  this.setState({flagMunicipios:false})
  this.setState({flagParroquias:false})
  this.setState({flagCentros:false})
  this.setState({flagMuestra:true})
  this.setState({zoom:[6]})
  this.setState({center:[-66.65286,9.2]})

}
    render() {
     
      //const { styleKey } = this.state;
    const {flagMuestra,flagMunicipios,flagParroquias,flagCentros,zoom,center } = this.state;
    //console.log({flagPopupTestigo})
    const Button = styled.button`
    border: 1px solid #3770c6;
  background-color: rgb(84, 152, 255);
  height: 100%;
  color: white;
  font-size: 13p
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #3770c6;
  };`
  const ButtonRed = styled.button`
    border: 1px solid #3770c6;
  background-color: rgb(240,10, 10);
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
    //  const Container = styled.div`
    //  position: relative;
    //  height: 100%;
    //  flex: 1;
    //`;
      
    //  const BottomBar = styled.div`
    ///  position: absolute;
     // bottom: 20px;
     // left: 20px;
     // right: 20px;
     // height: 40px;
     // display: flex;
     // justify-content: space-between;
     // align-items: center;
    //`;
   
    let formulariosOpciones=formularios.map(t=>{
     
      return(
         <option key={t.idformulario} value={t.idformulario}>{t.nombre} </option>
           )
     } )
     let estratosOpciones=estratos.map(e=>{     
      return(
         <option key={e.id} value={e.id}>{e.nombre}</option>
           )
     } )
          // let tendenciasOpciones=tendencias.map(t=>{     
          //  return(
          //     <option key={t.idt} value={t.idy}>{t.tendencia}</option>
          //       )
          // } )
          // let evaluacionOpciones=evaluacion.map(t=>{     
          //  return(
          //     <option key={t.ide} value={t.ide}>{t.puntos}</option>
          //       )
          // } )
         //  let correosOpciones=correos.map(t=>{
     
           // return(
           //  
           //    <option key={t.idc} value={t.idc}>{t.correo}</option>
           //      )
           //} )
        //console.log(features)
        //this.setState({comentario:"otra mas"})
        return(
        <div>
        
        <Button onClick={this.onMClick}>Municipios</Button>
        <Button onClick={this.onPClick}>Parroquias</Button>
        <Button onClick={this.onCClick}>Centros</Button>
        <ButtonRed onClick={this.onMuestraClick}>Muestra</ButtonRed>
        
            <select ref="estratos" onChange={this.onChangeEstrato}>
              {estratosOpciones}
            </select>
            <label>Formulario:</label>
       
            <select ref="formularios">
              {formulariosOpciones}
            </select>
            <label>Tendencia:</label>
            
            <table><tbody><tr><td valign="top">
        <Map        
            
          style="mapbox://styles/mapbox/streets-v10"
          center={center} 
          zoom={zoom}
          containerStyle={{height: "80vh",width: "90vw"}}
          onClick={this.onMapClick}
        > 
        {flagMunicipios&&<MapLayerMunicipios></MapLayerMunicipios>}
        {flagParroquias&&<MapLayerParroquias></MapLayerParroquias>}
        {flagCentros&&<MapLayerCentros></MapLayerCentros>}
        {flagMuestra&&<MapLayerMuestra propmuestra={this.state.muestra}
           propidestrato={this.state.idestrato} 
           proppopupinfo={this.state.popupInfo}
           flagPopupTestigo={this.state.flagPopupTestigo}
           flagPopUpTestigoTrue={this.onflagPopupTestigo}
           propsetasignados={this.onSetEstadisticas}
          ></MapLayerMuestra>}
        
        <Layer
                type="symbol"
                id="marker3"
                layout={{
                  "icon-image": "marker-15",
                  "icon-allow-overlap": true,
                  "text-field": "Prueba de TEXTO",
                  "text-font": ["Open Sans", "Arial Unicode MS Bold"],
                  "text-size": 11,
                  "text-transform": "uppercase",
                  "text-letter-spacing": 0.05,
                  "text-offset": [0, 1.5]
                }}>
               <Feature
                 coordinates={[-66,2]}
                />
            </Layer>
          
        
          <ZoomControl position={"bottomRight"} />
          </Map>
</td><td>


</td></tr>
</tbody>
</table>
          
</div>
        )    
     }
 }
export default Map2;

//https://github.com/alex3165/react-mapbox-gl/blob/master/example/src/demos/allShapes.tsx

/*
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
*/