import React, { Component } from 'react';

//import { Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
//port {LinkContainer} from 'react-router-bootstrap'
import Header from '../components/header'
import Home from '../components/home'
import Cursos from '../components/cursos'
import Personas from  '../components/personas'
import MapBox from  '../components/map'
import FaroBot from  '../components/farobot'
import About from  '../components/about'
import Login from  '../components/login'
import YouTube from  '../components/youtube'
//import Sms from  '../components/sms'
import Mensajeria from  '../components/mensajeria'
import Carousel from  '../components/carousel'
import ChartFaro from  '../components/chart'
import ChartTestigos from  '../components/charttestigos'
import {formularios,D1,D2,D3} from '../data/formularios.json';
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
      idformulario:"D3",
      formulario:D3,
      nombreformulario:"CIERRE / ESCRUTINIO / VERIFICACION CIUDADANA",
      idestado:"00",
      nombreestado:"Venezuela"
     };
  }
  onSetLogin = (flag) => { 
   // alert("login")   
    //console.log("login")
    this.setState({flagLogin:true})
} 
  onSetFormulario = (id,formulario,nombreformulario) => {    
    this.setState({idformulario:id,formulario:formulario,nombreformulario:nombreformulario})
} 
onSetEstado = (id,nombreestado) => {
    
  this.setState({idestado:id,nombreestado:nombreestado})
} 
  render() { 
    const { flagLogin } = this.state;
    
      return(
        <Router>
           <div >
            <Header></Header>
            <Switch>
            <Route path="/home" component={()=><Home/>}/>
            {flagLogin&&<Route path="/carousel" component={Carousel}/>}
            <Route path="/cursos" component={Cursos}/>
            <Route path="/youtube" component={YouTube}/>
            {flagLogin&&<Route path="/map" component={MapBox}/>}           
            <Route path="/personas" component={Personas}/>
            <Route path="/farobot" component={FaroBot}/>
            {flagLogin&&<Route path="/mensajeria" component={Mensajeria}/>}
            <Route path="/about" component={About}/>
            <Route path="/login" component={()=><Login onsetlogin={this.onSetLogin} />}/>  
        
           {flagLogin&& <Route path="/polar" component={()=><ChartTestigos />}/> } 
           {flagLogin&&<Route path="/chart" component={()=><ChartFaro onsetformulario={this.onSetFormulario} onsetestado={this.onSetEstado} idestado={this.state.idestado} nombreestado={this.state.nombreestado} idformulario={this.state.idformulario} formulario={this.state.formulario} nombreformulario={this.state.nombreformulario}/>}/> } 
                             
            <Redirect to="/home"/>
            </Switch>         
           </div>
        </Router>
        
      )
    
  }
}
//npm i devextreme@18.2.1-pre-18268

export default Main;
