import React, { Component } from 'react';
import ChartTestigo from './charttestigo'
import {estados} from '../data/tablas.json';
  class ChartTestigos extends Component {
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
        var url="http://faro2018consultas.azurewebsites.net/api/muestraasignacioneso9d"
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
   // console.log(muestra)
        //for (var i = 0; i < muestra.length; ++i) {
        //     if ( muestra[i].r1>0){ 
        //          polarchart[muestra[i].ec-1].F1 += 1;
        //     }
        //}
    if (error) {
        return <p>{error.message}</p>;
      }
  
      if (isLoading) {
        return <p>Loading ...</p>;
      }
     
    
    //console.log("render chart testigos")
    //console.log(muestra)
        var venezuela={"idestado":"00","nombreestado":"VENEZUELA LIBRE","e1":0,"e2":0,"e3":0,"e4":0,"e5":0,"e6":0,"e7":0,"m1":0,"m2":0,"m3":0,"m4":0,"m5":0,"m6":0,"m7":0,"tot1":0,"tot2":0,"tot3":0,"tot4":0,"tot5":0,"tot6":0,"tot7":0}
        var polarEstados=[]
        for (var iii = 0; iii< muestra.length; ++iii) {
          
          venezuela.e1+=muestra[iii].e1;venezuela.e2+=muestra[iii].e2;venezuela.e3+=muestra[iii].e3;venezuela.e4+=muestra[iii].e4;venezuela.e5+=muestra[iii].e5;venezuela.e6+=muestra[iii].e6;venezuela.e7+=muestra[iii].e7
          venezuela.m1+=muestra[iii].m1;venezuela.m2+=muestra[iii].m2;venezuela.m3+=muestra[iii].m3;venezuela.m4+=muestra[iii].m4;venezuela.m5+=muestra[iii].m5;venezuela.m6+=muestra[iii].m6;venezuela.m7+=muestra[iii].m7
          venezuela.tot1+=muestra[iii].tot1;venezuela.tot2+=muestra[iii].tot2;venezuela.tot3+=muestra[iii].tot3;venezuela.tot4+=muestra[iii].tot4;venezuela.tot5+=muestra[iii].tot5;venezuela.tot6+=muestra[iii].tot6;venezuela.tot7+=muestra[iii].tot7
            
        }
        
        //var ttt=0
           var z=0
               const polares=muestra.map(r=>{  
                z+=1;                
                 return(
                  <ChartTestigo key={z} idestado={z} r={r} tipo={'porc'}/>
                   )  
                 }   
               )
               var z=0
               const polaresC=muestra.map(r=>{  
                z+=1;                
                 return(
                  <ChartTestigo key={z} idestado={z} r={r} tipo={'cant'}/>
                   )  
                 }   
               )
    return(
        <div>
           <h2>
            <span className="badge badge-success m-2">{'Genoma Electoral (%)'}</span>
            </h2>
        <ChartTestigo key={0} idestado={0} r={venezuela} tipo={'porc'} />
        <div className="row ">
    <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
        {polares}

     </div></div>
  
 </div>
</div>     
    

       <h2>
            <span className="badge badge-warning m-2">{'Genoma Electoral (cant)'}</span>
            </h2>
        <ChartTestigo key={0} idestado={0} r={venezuela} tipo={'cant'}/>
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

export default ChartTestigos;