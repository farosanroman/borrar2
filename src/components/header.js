import React, { Component } from "react";
//import 'font-awesome/css/font-awesome.css';
//import 'bootstrap-social/bootstrap-social.css';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem }
 from 'reactstrap';
 //import { MenuItem} from 'react-bootstrap'
 import {NavLink} from 'react-router-dom'
 //import {LinkContainer} from 'react-router-bootstrap' video de devextreme Mahul
import logo from '../logo.png';
class Header extends Component {
    constructor(props) {
        super(props);    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
  render() {
    return(
       <div>
      <Navbar dark expand="md"> 
      <div className="container">
      <NavbarToggler onClick={this.toggleNav} />   
            <NavbarBrand className="mr-auto" href="/">
             <img src={logo} height="30" alt="Plataforma BizAccount" />  
            </NavbarBrand> 
            <Collapse isOpen={this.state.isNavOpen} navbar>
            
            <Nav navbar>
            <NavItem>
                  <NavLink className="nav-link" to="/carousel">
                  <span className="fa fa-home"></span>Home
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home"></span>Home
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/cursos">
                  <span className="fa fa-graduation-cap"></span>Netflix
                  </NavLink>
              </NavItem>
              
              <NavItem>
                  <NavLink className="nav-link" to="/map">
                  <span className="fa fa-map-marker"></span>Uber
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/personas">
                  <span className="fa fa-rebel"></span>Facebook
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/farobot">
                  <span className="fa fa-twitter"></span>FaroBot
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/sms">
                  <span className="fa fa-phone"></span>SMS Colmena
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/about">
                  <span className="fa fa-info-circle"></span>OpenFaro
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/login">
                  <span className="fa fa-key"></span>Login
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to="/chart">
                  <span className="fa fa-pie-chart"></span>React CHART
                  </NavLink>
              </NavItem>
                         
            </Nav>
            
            </Collapse>
            
            </div>      
      </Navbar>
     </div>     
    
    );
  }
}

export default Header;