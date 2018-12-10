import React, { Component } from 'react';

//import {observadores}  from '../data/observadores.json'
import DataGrid, { Column, RemoteOperations,Grouping,Summary,TotalItem,GroupItem, Paging,Export, Pager } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
//import Persona from '../components/persona';
import Piramide from '../components/personaspiramide';

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
    
    var url="https://faro2018consultas.azurewebsites.net/api/personasxcodcnexroles2?codcne=00&roles=247"
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
      /*
        let personasC=personas.map(persona=>{
          return(
             <Persona key={persona.id} persona={persona} ></Persona>
               )
         } )
         */
        return (
            
          <div  >
          <DataGrid
              dataSource={personas}              
              showBorders={true}             
              columnAutoWidth={true}
              wordWrapEnabled={true}
             
           >
            <Grouping autoExpandAll={false} />
             <Column dataField={'FechaAsignado'} caption={'Fecha'} dataType={'date'} format={'dd/MM HH:mm'}  width={80} />
             <Column dataField={'estado'} dataType={'string'} groupIndex={0} width={100}/>
             <Column dataField={'codcne'} width={100}/>
             <Column dataField={'muestra'} width={15}/>
             <Column dataField={'E'} width={15}/>
             <Column dataField={'RE'} width={100}/>
             <Column dataField={'nombre'} width={300} />
             <Column dataField={'nombreapellido'} width={200} />
             <Column dataField={'orientacion'} width={40} />
             <Column dataField={'celular'} width={85} />
             <Column dataField={'correo'} width={200} />
             <RemoteOperations sorting={true}  paging={true} />
             <Paging defaultPageSize={1000} />
             <Export enabled={true}  />
             <Summary recalculateWhileEditing={true}>
             <GroupItem
              column={'FechaAsignado'}
              summaryType={'count'}
              displayFormat={'{0} O9Ds'} />
              <TotalItem
                 column={'FechaAsignado'}
                 summaryType={'count'} />
           
             </Summary>
           </DataGrid>
           <Piramide defensores={personas}/>
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