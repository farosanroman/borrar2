import React, { Component } from 'react';
import {facilitadores} from '../data/facilitadores.json';
import Persona from '../components/persona';
//console.log({facilitadores})
class Personas extends Component {
    render() {
        
        let personas=facilitadores.map(persona=>{
          return(
             <Persona key={persona.id} persona={persona} mouseenter={this.props.mouseenter}></Persona>
               )
         } )
        return (
            
          <div  style={{width:"201px", height: "600px", overflow: "auto" }}>
            <h3>Facilitadores</h3>
            <ul >
          {personas}
            </ul>
          </div>
        );
      }
    }
    export default Personas;