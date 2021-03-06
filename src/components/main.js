import React, { Component } from 'react';

//import { Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
//port {LinkContainer} from 'react-router-bootstrap'
import Header from '../components/header'
import Home from '../components/home'
import Cursos from '../components/cursos'
import Personas from  '../components/personas'
import Ficha from  '../components/ficha'
import MapBox from  '../components/map'
import Geo from  '../components/geo'
import GeoModelo from  '../components/geomodelo'

import FaroBot from  '../components/farobot'
import About from  '../components/about'
import Login from  '../components/login'
import YouTube from  '../components/youtube'
//import Sms from  '../components/sms'
import Mensajeria from  '../components/mensajeria'
import Carousel from  '../components/carousel'
import ChartFormularios from  '../components/chartformularios'
import ChartTestigos from  '../components/charttestigos'
import ChartFaro from  '../components/chart'
import ChartEstratos from  '../components/estratos'
import {formularios,A1,A2,D1,D2,D3} from '../data/formularios.json';
//https://www.coursera.org/lecture/front-end-react/exercise-video-header-and-footer-7abwF

   
//const Desarrollo =()=>(
//  <h1>En Desarrollo</h1>/
//)

//https://www.robinwieruch.de/local-storage-react/

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,     
      config:null,
      flagLogin:false,
      flagMenu:true,
      flagMenu9D:false,
      idformulario:"A1",
      formulario:A1,
      nombreformulario:"A1 COACCION / INTIMIDACION / CARNET DE LA PATRIA",
      idestado:"00",
      nombreestado:"Venezuela"
     };
  }
  onSetLogin = (flag,flagmenu,flagmenu9d) => { 
   // alert("login")   
    //console.log("login")
    //alert("onSetLogin main"+JSON.stringify({flagLogin:true,flagMenu:flagmenu,flagMenu9D:flagmenu9d}))
    this.setState({flagLogin:true,flagMenu:flagmenu,flagMenu9D:flagmenu9d})

} 
  onSetFormulario = (id,formulario,nombreformulario) => {  
    //alert("onSetFormulario "+id)  
    this.setState({idformulario:id,formulario:formulario,nombreformulario:nombreformulario})
} 
onSetEstado = (id,nombreestado) => {  
 
  this.setState({idestado:id,nombreestado:nombreestado})
} 
  render() { 
    const { flagLogin,flagMenu,flagMenu9D } = this.state; 
    //alert("render main"+flagMenu+" "+flagMenu9D)   
      return(
        <Router>
           <div >
            <Header flagmenu={flagMenu} flagmenu9d={flagMenu9D}></Header>
            <Switch>
            <Route path="/home" component={()=><Home/>}/>
            {flagLogin&&<Route path="/carousel" component={Carousel}/>}
            <Route path="/cursos" component={Cursos}/>
            <Route path="/youtube" component={YouTube}/>
            {flagLogin&&<Route path="/map" component={MapBox}/>}
            <Route path="/geo" component={()=><Geo />}/>  
            <Route path="/geomodelo" component={()=><GeoModelo />}/>  
            <Route path="/ficha"  component={()=><Ficha />}/>         
            {flagLogin&& <Route path="/personas" component={Personas}/>}
            <Route path="/farobot" component={FaroBot}/>
            {flagLogin&&<Route path="/mensajeria" component={Mensajeria}/>}
            {flagLogin&& <Route path="/polar" component={()=><ChartTestigos />}/> } 
            {flagLogin&& <Route path="/polarf" component={()=><ChartFormularios />}/> }
            {flagLogin&&<Route path="/chart" component={()=><ChartFaro onsetformulario={this.onSetFormulario} onsetestado={this.onSetEstado} idestado={this.state.idestado} nombreestado={this.state.nombreestado} idformulario={this.state.idformulario} formulario={this.state.formulario} nombreformulario={this.state.nombreformulario}/>}/> } 
            {flagLogin&&<Route path="/estratos" component={()=><ChartEstratos onsetformulario={this.onSetFormulario}  idformulario={this.state.idformulario} formulario={this.state.formulario} nombreformulario={this.state.nombreformulario} />}/>}
            <Route path="/about" component={About}/>
            <Route path="/login" component={()=><Login onsetlogin={this.onSetLogin} />}/>  
                        
            <Redirect to="/home"/>
            </Switch>         
           </div>
        </Router>
        
      )
    
  }
}
//npm i devextreme@18.2.1-pre-18268

export default Main;
