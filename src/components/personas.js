import React, { Component } from 'react';

//import {observadores}  from '../data/observadores.json'
import DataGrid, { Column, RemoteOperations, Paging, Pager } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import Persona from '../components/persona';

//console.log({facilitadores})
class Personas extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        personas:[],
        error:null,
        isLoading: false,
       
     };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    
    var url="https://faro2018consultas.azurewebsites.net/api/personasxcodcnexroles?codcne=00&roles=247"
    //console.log(url)
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
   .then(resultados => this.setState({personas:resultados ,isLoading:false}))
   .catch(error => this.setState({ error, isLoading: false }));
    }
   
    render() {
      const {personas,isLoading,error } = this.state;
      if (error) {
        return <p>{error.message}</p>;
      }
     if (isLoading) {
        return <p>Loading ...</p>;
      }
        let personasC=personas.map(persona=>{
          return(
             <Persona key={persona.id} persona={persona} ></Persona>
               )
         } )
        return (
            
          <div  >
          <DataGrid
              dataSource={personas}              
              showBorders={true}             
              columnAutoWidth={true}
              wordWrapEnabled={true}
           >
             <Column dataField={'FechaAsignado'} dataType={'date'} format={'dd/MM/yyyy HH:mm'} />
             <Column dataField={'codcne'} />
             <Column dataField={'muestra'} />
             <Column dataField={'E'} />
             <Column dataField={'RE'} />
             <Column dataField={'nombre'} />
             <RemoteOperations sorting={true}  paging={true} />
        
           </DataGrid>
           
          </div>
        );
      }
    }
    export default Personas;
/*
    <h3>Facilitadores</h3>
    <ul >
  {personas}
    </ul>
    */