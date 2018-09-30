import React, { Component } from 'react';

//import { Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom'
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
//import Footer from  '../components/footer'
//import Login from  '../components/login'
//import About from '../components/about'
//import logo from '../logo.png';


//
//npm start
////
//https://www.coursera.org/lecture/front-end-react/exercise-video-header-and-footer-7abwF

   
const Desarrollo =()=>(
  <h1>En Desarrollo</h1>
)

//https://www.robinwieruch.de/local-storage-react/

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flag:0,     
      config:null };
  }
  
  render() {
    
  
    const HomePage=()=>{return(
      <div>bizzz</div>
      )
    }
    const HomePage2=()=>{return(
        <div>bizzz 222</div>
        )
      }
      return(
  
       
        <Router>
           <div >
            <Header></Header>
            <Switch>
            <Route path="/home" component={()=><Home/>}/>
            <Route path="/cursos" component={Cursos}/>
            <Route path="/youtube" component={YouTube}/>
            <Route path="/map" component={MapBox}/>
            <Route path="/personas" component={Personas}/>
            <Route path="/farobot" component={FaroBot}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            
            
                <Redirect to="/home"/>
            </Switch>         
           </div>
        </Router>
        
      )
    
  }
}

export default Main;
