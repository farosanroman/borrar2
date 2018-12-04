import React, { Component } from 'react';
//import {facilitadores} from '../data/facilitadores.json';
//import {defensores} from '../data/defensores.json';
//import Persona from '../components/persona';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
//console.log({facilitadores})
//import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
//const pageSizes = [10, 25, 50, 100];      
class Mensajeria extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          defensores:[],
          
          isLoading: false,
     error:null
        };
      }
      componentDidMount() {
          console.log("componentDidMount()")
       
            this.setState({ isLoading: true });
            var url="http://faro2018consultas.azurewebsites.net/api/sendsmsdmmail";
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
          .then(result => this.setState({defensores:result,isLoading:false}))
          .catch(error => this.setState({ error, isLoading: false }));
          
            
      }
      sendMensaje = (e) => {
        //alert('The value is: ' + this.mensaje.value);
        e.preventDefault();
        const { value } = this.mensaje.value;
        const dd=this.state.defensores
        console.log(dd)
        for (var i = 0; i < dd.length; ++i) {
          //var d= {"key":7,"cedula":"V3664204","celular":"4143060733","mail":"ppazpurua@gmail.com","twt":"pazpurua"}
          var d=dd[i];
          d.mensaje=this.mensaje.value
          //alert(JSON.stringify(d))
          var url='http://nodefaro.azurewebsites.net/sendsmsmailtwt'
        //url=  'http://localhost:4730/sendsmsmailtwt'
        fetch('http://nodefaro.azurewebsites.net/sendsmsmailtwt',{
          method: "POST",
          body: JSON.stringify(d),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        })
          .then(response => response.json())
          .then(result => this.onSetResult(result))
          //.then(data => this.setState({ personas: data }))
          .catch((error) => {
            console.error(error);
        });
      }
        console.log("onSearch3")
        //console.log(this.state.personas)
      }
      onSetResult = (result) => {
        console.log("onSetRsultss")
        console.log(result)
        //this.setState({ personas: result })
        //console.log(this.state.personas)
    }
    render() {
      const { error,isLoading } = this.state;
      if (error) {
        return <p>{error.message}</p>;
      }
    
      if (isLoading) {
        return <p>Loading ...</p>;
      }
        return (
            <div>
                <form onSubmit={this.sendMensaje}>
        <label>
          Mensaje:
          <input type="text" ref={mensaje => this.mensaje = mensaje} />
          </label>
         
          <button type="submit">Enviar</button>
        </form>
            <ul>
            {this.state.defensores.map(item => (
              <li key={item.key}>{item.cedula}-{item.celular}-{item.mail}-{item.twt}<button type="button" width="100px" height="40px
              " ></button></li>
            ))}
          </ul>
        
        
          </div>
        )
          
        
      }
    }
    export default Mensajeria;
const quijote="El Quijote a Sancho: “La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos; con ella no pueden igualarse los tesoros que encierra la tierra ni el mar encubre; por la libertad, así como por la honra se puede y se debe aventurar la vida y, por el contrario, el cautiverio es el mayor mal que puede venir a los hombres.”"