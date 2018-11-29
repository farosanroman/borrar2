import React, { Component } from 'react';
import ChartFormulario from './chartformulario'
import {estados} from '../data/tablas.json';
  class ChartFormularios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            muestra:[],
            isLoading: false,
         };
      }
      componentDidMount() {
        this.setState({ isLoading: true });
        //var url="https://faro2018nodos.azurewebsites.net/api/faronodosapi_getnodoselectoralesescrutiniossos10122018?idestado=&idcircunscripcion=&idmunicipio=&idparroquia=&idcentro=&idmesa=&muestra=1&estrato=0&callcenter=&grupocallcenter=&opcion=1&idmomento=0";
        var url="http://faro2018consultas.azurewebsites.net/api/muestraformularios9d"
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
      .then(result => this.setState({muestra:result,isLoading:false}))
      .catch(error => this.setState({ error, isLoading: false }));
      
        }
       
  render() {
    const {muestra,isLoading,error } = this.state;
    console.log(muestra)
       
    if (error) {
        return <p>{error.message}</p>;
      }
  
      if (isLoading) {
        return <p>Loading ...</p>;
      }
     
    
    //console.log("render chart testigos")
    //console.log(muestra)
    
        var venezuela={"idestado":"00","nombreestado":"VENEZUELA LIBRE","e1":0,"e2":0,"e3":0,"e4":0,"e5":0,"e6":0,"e7":0,"d11":0,"d12":0,"d13":0,"d14":0,"d15":0,"d16":0,"d17":0,"d21":0,"d22":0,"d23":0,"d24":0,"d25":0,"d26":0,"d27":0,"d31":0,"d32":0,"d33":0,"d34":0,"d35":0,"d36":0,"d37":0}
        //var polarEstados=[]
        for (var iii = 0; iii< muestra.length; ++iii) {
          venezuela.e1+=muestra[iii].e1;venezuela.e2+=muestra[iii].e2;
          venezuela.e3+=muestra[iii].e3;venezuela.e4+=muestra[iii].e4;
          venezuela.e5+=muestra[iii].e5;venezuela.e6+=muestra[iii].e6;
          venezuela.e7+=muestra[iii].e7;
          venezuela.d11+=muestra[iii].d11;venezuela.d12+=muestra[iii].d12;
          venezuela.d13+=muestra[iii].d13;venezuela.d14+=muestra[iii].d14;
          venezuela.d15+=muestra[iii].d15;venezuela.d16+=muestra[iii].d16;
          venezuela.d17+=muestra[iii].d17;
          venezuela.d21+=muestra[iii].d21;venezuela.d22+=muestra[iii].d22;
          venezuela.d23+=muestra[iii].d23;venezuela.d24+=muestra[iii].d24;
          venezuela.d25+=muestra[iii].d25;venezuela.d26+=muestra[iii].d26;
          venezuela.d27+=muestra[iii].d27;
          venezuela.d31+=muestra[iii].d31;venezuela.d32+=muestra[iii].d32;
          venezuela.d33+=muestra[iii].d33;venezuela.d34+=muestra[iii].d34;
          venezuela.d35+=muestra[iii].d35;venezuela.d36+=muestra[iii].d36;
          venezuela.d37+=muestra[iii].d37;
           
        }
        
        //var ttt=0
           
               var z=0
               const polares=muestra.map(r=>{  
                z+=1;                
                 return(
                  <ChartFormulario key={z} idestado={z} tipo={'porc'} r={r} />
                   )  
                 }   
               )
               var z=0
               const polaresC=muestra.map(r=>{  
                z+=1;                
                 return(
                  <ChartFormulario key={z} idestado={z} tipo={'cant'} r={r} />
                   )  
                 }   
               )
    return(
        <div>
           <h2>
            <span className="badge badge-danger m-2">{'Tablero de Registro de Formularios (%)'}</span>
            </h2>
        <ChartFormulario key={0} idestado={0} r={venezuela} tipo={'porc'} />
        <div className="row ">
    <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
        {polares}

     </div></div>  
     </div>
     </div>     
    

     <h2>
            <span className="badge badge-warning m-2">{'Tablero de Registro de Formularios (cant)'}</span>
            </h2>
        <ChartFormulario key={0} idestado={0} r={venezuela} tipo={'cant'} />
        <div className="row ">
    <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
        {polaresC}

     </div></div>  
     </div>
     </div>     
        
        </div>
    );
  }
}

export default ChartFormularios;