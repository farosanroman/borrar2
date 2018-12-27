import React from 'react';
import GeoPie from './geopie';
import GeoJsonLayer from './geojsonlayer';
import GeoCharts from './geocharts';
import Formulario from './formulario';

import Button  from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';
import {E01} from '../data/tablas.json';
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

let parroquias=[]
parroquias.push(CV0101)
    parroquias.push(CV0102)
    parroquias.push(CV0103)
    parroquias.push(CV0104)
    parroquias.push(CV0105)
    parroquias.push(CV0106)
    parroquias.push(CV0107)
    parroquias.push(CV0108)
    parroquias.push(CV0109)
    parroquias.push(CV0110)
    parroquias.push(CV0111)
    parroquias.push(CV0112)
    parroquias.push(CV0113)
    parroquias.push(CV0114)
    parroquias.push(CV0115)
    parroquias.push(CV0116)
    parroquias.push(CV0117)
    parroquias.push(CV0118)
    parroquias.push(CV0119)
    parroquias.push(CV0120)
    parroquias.push(CV0121)
    parroquias.push(CV0122)

   // let centro=[-66.45286,10.3]
   //let zoom=[8]
   const intervalHandle= undefined;
   const timeoutHandle = undefined;
   const mounted = false;
   let mappedRoute=[]
   mappedRoute.push({id:1})
   mappedRoute.push({id:2})
   mappedRoute.push({id:3}) 
class GeoModelo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      center:[-66.99286,10.48],
      zoom:[11],
      error:null,
      isLoading:false,
      geojson:parroquias,
      COD_ESTADO:"Modelo Matematico de Simulacion ©Faro San Roman",
      ESTADO:"",
      centros:E01,
      centrospoli:[],
      circleRadius:10,
      routeIndex:0,
      serie:[]
    };
    
  } 
  onClick(e){
    for (var i = 0; i< E01.length; ++i) { 
      // notify("En desarrollo "+i, "error", 100);
      var j=E01[i]
      j.id=j.codigocanonicocne.substring(0,9);
      j.color="sin";
      j.fecha=new Date();
      //alert(JSON.stringify(j));
       fetch('https://f18.azurewebsites.net/api/GeoPostCentro?code=oRRJfAA76FhSaJWOq68oFeXK/7HHXoUmIsz9aiH55ebsgn/bMsGljw==', 
       {
       method: 'post',
       headers: {Accept: 'application/json','Content-Type': 'application/json' },
       body: JSON.stringify(j)
     })
     .then((response) => response.json())
    .catch((error) => {
      console.log('error')
      console.error(error);
    });
    }
      //alert(JSON.stringify(this.form.option("formData")));
    }
  componentWillMount() {
    fetch('https://f18.azurewebsites.net/api/GeoPostCentro?code=oRRJfAA76FhSaJWOq68oFeXK/7HHXoUmIsz9aiH55ebsgn/bMsGljw==', 
       {
       method: 'post',
       headers: {Accept: 'application/json','Content-Type': 'application/json' },
       body: JSON.stringify({"id":"1","nombre":"ppa"})
     })
     .then((response) => response.json())
    .catch((error) => {
      console.log('error')
      console.error(error);
    });
    this.mounted = true;
    this.timeoutHandle = setTimeout(() => {
      if (this.mounted) {
        this.setState({
         circleRadius: 10
        });
      }
    }, 3000);
    this.intervalHandle = setInterval(() => {
      if (this.mounted) {

        var url="https://f18.azurewebsites.net/api/GeoGetCentros?code=tZIQbbCaMtMRygGXCOSysyJjDIhy3FtLhj7uCvQP3fXJLdSgAR0utw=="
        fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(result => this.onSetResult(result))
       //.then(c => this.setState({centrospoli:c ,isLoading:false}))
       .catch(error => this.setState({ error, isLoading: false }));
       notify(JSON.stringify(this.state.centrospoli), "success", 2000);
        
        let s=this.state.serie;
        var cant=s.length+1;
        s.push({fecha:new Date(),cant:cant,acum:cant})
        this.setState({
          routeIndex: this.state.routeIndex + 1,
          serie:s
        });
      }
    }, 10000);

  }
  onSetResult = (result) => {
    this.setState({centrospoli:result ,isLoading:false})
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
    clearInterval(this.intervalHandle);
  }
  componentDidMount() {
    
    //console.log(E01)
    //this.setState({centros:E01})
    let feature=[];
    let centro=
    {
        "type":"Feature",
        "properties":{
          "place":"Observador O9D",
          "login":"espresso",
          "lat":"38.91427",
          "lon":"-66.86699"
          
        }, 
                
        "geometry":{
          "type":"Point",
          "coordinates":[
            -66.86699,
            10.48358
          ]
        }
      }
    //this.setState({poligono01:CV0101.features[0].geometry.coordinates})
    //this.setState({poligono02:CV0102.features[0].geometry.coordinates})
    //this.setState({poligono03:CV0103.features[0].geometry.coordinates})

  }
  
getCirclePaint = (color) => ({
    'circle-radius': 4,
    'circle-color': color,
    'circle-opacity': 0.8
  });
  render() {
   
    if (error) {
        return <p>{error.message}</p>;
      }
    if (isLoading) {
        return <p>Loading ...</p>;
      }
      const {centrospoli,serie,geojson,centros,center,zoom,error,isLoading,COD_ESTADO,ESTADO } = this.state;
      //console.log('geomodelo centrospoli')
      //console.log(centrospoli)
      // console.log("render geo")
     //console.log(geojson)
      
    //alert(JSON.stringify(formItems[0].items[2].items))
    return(
        <div>
         
          <h3>
             <span  className="badge badge-secondary">{COD_ESTADO+" "+ESTADO}</span>
             <Button
            text={"Inicializar Data!!!"}
            onClick={this.onClick}
            type='success'
          />
          </h3>
          <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
        
        <GeoJsonLayer geojson={geojson} centrospoli={centrospoli} centros={centros} center={center} zoom={zoom} onsetgeojson={this.onSetGeoJson} />
        <GeoPie />
        
     </div></div>  
     </div>
     <Formulario />
      
       <div className="d-flex flex-row">                    
       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
         <div className="card-deck">
         
        
         <GeoCharts serie={serie} />
      </div></div>  
      </div>
      <Formulario />
       </div>
      )
    }
  }

export default GeoModelo;