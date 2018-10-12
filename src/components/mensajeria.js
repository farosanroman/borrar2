import React, { Component } from 'react';
import {facilitadores} from '../data/facilitadores.json';
import {defensores} from '../data/defensores.json';
import Persona from '../components/persona';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
//console.log({facilitadores})
//import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
const pageSizes = [10, 25, 50, 100];      
class Mensajeria extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          defensores,
          personas:null,
          dm:null
        };
      }
      componentDidMount() {
          console.log("componentDidMount()")
        this.setState({ personas: [{a:1}] })
        console.log(this.state.personas)
      }
      sendMensaje = (e) => {
        alert('The value is: ' + this.mensaje.value);
        e.preventDefault();
        const { value } = this.mensaje.value;
        fetch('http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V3664204')
        
          .then(response => response.json())
          .then(result => this.onSetResult(result, {value}))
          //.then(data => this.setState({ personas: data }))
          .catch((error) => {
            console.error(error);
        });
        console.log("onSearch3")
        //console.log(this.state.personas)
      }
      onSetResult = (result) => {
        console.log("onSetRsultss")
        //console.log(result)
        this.setState({ personas: result })
        console.log(this.state.personas)
    }
    render() {

        return (
            <div>
            <ul>
            {this.state.defensores.map(item => (
              <li key={item.key}>{item.cedula}-{item.celular}-{item.mail}-{item.twt}<button type="button" width="100px" height="40px
              " ></button></li>
            ))}
          </ul>
          <form onSubmit={this.sendMensaje}>
        <label>
          Mensaje:
          <input type="text" ref={mensaje => this.mensaje = mensaje} />
          </label>
         
          <button type="submit">Enviar</button>
        </form>
        
          </div>
        )
          
        
      }
    }
    export default Mensajeria;
const quijote="El Quijote a Sancho: “La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos; con ella no pueden igualarse los tesoros que encierra la tierra ni el mar encubre; por la libertad, así como por la honra se puede y se debe aventurar la vida y, por el contrario, el cautiverio es el mayor mal que puede venir a los hombres.”"