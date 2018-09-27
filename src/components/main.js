import React, { Component } from 'react';

import { Navbar,Nav,NavItem,NavDropdown,MenuItem,NavbarBrand} from 'react-bootstrap'
//import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom'
//port {LinkContainer} from 'react-router-bootstrap'
import Header from '../components/header'
import MapBox from  '../components/map'
import About from  '../components/about'
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
           <div className= "App">
            <Header></Header>
            <Switch>
            <Route path="/home" component={()=><About/>}/>
           
            <Route path="/map" component={MapBox}/>
                <Redirect to="/home"/>
            </Switch>         
           </div>
        </Router>
        
      )
    
  }
}

export default Main;
