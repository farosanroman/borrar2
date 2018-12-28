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
       //notify(JSON.stringify(this.state.centrospoli), "success", 2000);
        
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
  windowOpen=(w)=>{
    window.open('https://twitter.com/messages/compose?recipient_id=45031619&welcome_message_id=1078321944376823812', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')

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
         
<img width="30" height="30" src="data:image/png;base64,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" onClick={this.windowOpen} />

          </h3>
          <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
        
        <GeoJsonLayer geojson={geojson} centrospoli={centrospoli} centros={centros} center={center} zoom={zoom} onsetgeojson={this.onSetGeoJson} />
        <GeoPie centrospoli={centrospoli} />
        
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