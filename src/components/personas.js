import React, { Component } from 'react';
import {facilitadores} from '../data/facilitadores.json';
import {observadores}  from '../data/observadores.json'
import DataGrid, { Column, RemoteOperations, Paging, Pager } from 'devextreme-react/data-grid';
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
            
          <div  >
          <DataGrid
              dataSource={observadores}              
              showBorders={true}
           >
             <Column dataField={'FechaAsignado'} dataType={'date'} />
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