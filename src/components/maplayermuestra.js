import React, { Component } from 'react';
import  MapboxGL, {Layer,Feature} from 'react-mapbox-gl';
//import {muestra} from '../data/muestra.json';
import {coffe} from '../geo/coffe.json';
import MapPopupTestigo from './mappopuptestigos';
//https://stackoverflow.com/questions/49059467/display-polygon-in-react-mapbox-gl

const popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}
//console.log(muestra)
let centro=[-66.45286,14.3]
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
   // comentario:"comentario",      
    center:centro,
    zoom:zoom,    
    cvnombre:"",
    popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"},
    nuevodefensor:{}, 
    flagPopupTestigo:this.props.flagPopupTestigo,     
    idestrato:0,
    muestra:[],
    isLoading: false,
     error:null
};
console.log("class MapLayerMuestra=>" +this.state.flagPopupTestigo)
//console.log("this.state.muestra e1n maplayermuestra")
//console.log(this.state.muestra)
this.onFeatureClick = this.onFeatureClick.bind(this)
this.onFeatureMouseEnter = this.onFeatureMouseEnter.bind(this)
this.onFeatureMouseLeave = this.onFeatureMouseLeave.bind(this)   
    
}
componentDidMount() {
  this.setState({ isLoading: true });
  var url="https://faro2018nodos.azurewebsites.net/api/faronodosapi_getnodoselectoralesescrutiniossos10122018?idestado=&idcircunscripcion=&idmunicipio=&idparroquia=&idcentro=&idmesa=&muestra=1&estrato=0&callcenter=&grupocallcenter=&opcion=1&idmomento=0";
  fetch(url)
// .then(response => response.json())
// .then(result => this.onSetResult(result))
 
 .then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Something went wrong ...');
  }
})
.then(result => this.setState({muestra:result,isLoading:false,coffe:coffe,idestrato:this.props.propidestrato}))
.catch(error => this.setState({ error, isLoading: false }));

  }
  onSetResult = (result) => {
    //console.log("onSetRsultss sss")
    console.log(result)
    this.setState({muestra:result})
    this.setState({coffe:coffe})
    this.setState({idestrato:this.props.propidestrato}) 
    this.setState({ isLoading: false });
    //this.setState({ personas: result })
    //console.log(this.state.personas)
}
  getPolygonPaint = (color) => (MapboxGL.FillPaint = {
    'fill-color': color,
    'fill-opacity': 0.3
  });
getCirclePaint = (color) => ({
    'circle-radius': 3,
    'circle-color': color,
    'circle-opacity': 0.8
  });
  onFeatureMouseEnter(evt) {
   // console.log("evt evt evt evt evt")
   // console.log(evt)
    //const lnglat=[evt.feature.properties.lng,evt.feature.properties.lat]
    const lnglat=[evt.feature.properties.longitud,evt.feature.properties.latitud]
    this.setState({popupType:"msg"})
    this.setState({flagPopupTestigo:true})
    //this.setState({comentario:"pop.nombre"})
    const pop={coordinates:lnglat,idcentro:evt.feature.properties.idcentro,centro:evt.feature.properties.nombrecentro,nombre:evt.feature.properties.nombretestigo,celular:evt.feature.properties.celulartestigo,correo:evt.feature.properties.correotestigo,cedula:evt.feature.properties.cedulatestigo};
    console.log(JSON.stringify(pop))
    this.setState({popupInfo:pop})
    this.props.flagPopUpTestigoTrue()
   }
   onFeatureClick(evt) {
    this.setState({zoom:[8]})
    const pop={coordinates:JSON.parse(evt.feature.properties.latlng),nombre:evt.feature.properties.nombre};
    this.setState({center:JSON.parse(evt.feature.properties.latlng)})
    this.setState({popupInfo:pop})
    this.setState({popupType:"form"})
  }
   onFeatureMouseLeave(e) {
    this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})

 }
   onPopupClose(e) {    
     this.setState({popupInfo:{"coordinates":[0,0],"nombre":"oJo","error":"sin error"}})
 }

render() { 
 
  const { popupInfo,flagPopupTestigo,error,isLoading } = this.state;
  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  //console.log("LAYER MUESTRA") 
  //console.log(this.props.flagPopupTestigo+" "+this.state.flagPopupTestigo)
  //console.log({popupInfo})
    const idestrato=this.props.propidestrato*1
    //const idestrato=3
    
     const {muestra } = this.state;
     //console.log({muestra })
    
     //let nodosprop=this.props.propmuestra
     
     //const azules = muestra.filter(r => (r.nombretestigo.indexOf('SIN')>-1));
     const azules=[]
     const rojos=[]
     for (var ii = 0; ii< muestra.length; ++ii) {
          if (muestra[ii].nombretestigo==="SIN OBSERVADOR 9D"){
             rojos.push(muestra[ii])
          }else{
             azules.push(muestra[ii])  
             
          }
     }
     console.log("O9D "+azules.length) 
     //this.props.propsetasignados(33) 
     //console.log(azules)
     //alert(idestrato)
     let nodoserojos=rojos;
     if (idestrato>0){
         nodoserojos = rojos.filter(r => (r.estratocentro === idestrato));
     }
     var i;
     const muestraroja=nodoserojos.map(cv=>{     
       i+=1;
        return(
          <Feature key={i} properties={cv}   coordinates={[cv.longitud,cv.latitud]} 
          onMouseEnter={this.onFeatureMouseEnter} 
          />
            )     
      }) 
      let nodoseazules=azules;
      if (idestrato>0){
          nodoseazules = azules.filter(r => (r.estratocentro === idestrato));
      }
 
      const muestraazul=nodoseazules.map(cv=>{     
        i+=1;
         return(
           <Feature key={i} properties={cv}   coordinates={[cv.longitud,cv.latitud]} 
           onMouseEnter={this.onFeatureMouseEnter} 
           />
             )     
       })   
      return (
      <div className= "Popup">
       <Layer type="circle" radius={250} color={ 'green'} fillColor= 'green' 
         fillOpacity= {0.5} paint={this.getCirclePaint('red')}> 
        {muestraroja}
     </Layer> 
     <Layer type="circle" radius={250} color={ 'green'} fillColor= 'green' 
         fillOpacity= {0.5} paint={this.getCirclePaint('blue')}> 
        {muestraazul}
     </Layer> 
  <MapPopupTestigo key={111} 
     functionclose={this.onFeatureMouseLeave} 
     popupnodotype={this.state.popupType} 
     popupnodoinfo={popupInfo} 
     flagPopupTestigo={this.props.flagPopupTestigo} 
     />
      <label>Tendencia:</label>
      <form >
     <h6>{'aaa'}{'-'}</h6>
     <h6>{'aaa'}{'-'}</h6>
     </form>
     </div>
 
 )
  
}
}
export default MapLayerMuestra;
