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
        var url="https://faro2018nodos.azurewebsites.net/api/faronodosapi_getnodoselectoralesescrutiniossos10122018?idestado=&idcircunscripcion=&idmunicipio=&idparroquia=&idcentro=&idmesa=&muestra=1&estrato=0&callcenter=&grupocallcenter=&opcion=1&idmomento=0";
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
    
        var polarEstados=[]
        for (var iii = 0; iii< estados.length-1; ++iii) {
              polarEstados.push([0,0,0,0,0,0,0])
              //console.log(estados[iii].name)
        }
        for (var i = 0; i< muestra.length; ++i) {
            let estado=muestra[i].idestado*1-1
            let estrato=(muestra[i].estratocentro*1-1)
            //console.log(muestra[i].idestado+" "+estado+" "+estrato)
            if(muestra[i].nombretestigo !== "SIN OBSERVADOR 9D"){
               // console.log("OBSERVADOR")
                polarEstados[estado][estrato]+=1
            //console.log(polarEstados[estado,estrato].F1)
            }
        }
        //console.log(polarEstados)
        let ven=[0,0,0,0,0,0,0]
       // console.log("vvvveeeeennnnn....")
       // console.log("estados")
       // console.log(estados)
       // console.log("polarestados")
       // console.log(polarEstados)
       // console.log("vvvveeeeennnnn.....")
        var ttt=0
        
        for (var ii = 0; ii< estados.length-1; ++ii) {
            for (var j = 0; j< 7; ++j) {
              ttt+=polarEstados[ii][j]
             ven[j]+=polarEstados[ii][j] 
             //ven[0]+=polarEstados[i][0] 
            }
        }
       // console.log("ttt"+ttt)
       //  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      // console.log(ven)
       //  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            var z=0
            const polares=polarEstados.map(r=>{  
                z+=1;
                //var n=estados[ii].name
                //var name =estados[ii].name
                 return(
                     
                  <ChartTestigo key={z} idestado={z} polard={r} />
              
                     )  
                 }   
               ) 
    return(
        <div>
<ChartTestigo key={9} idestado={0} polard={ven} />
       <div className="container-fluid" style={{marginLeft: '-15px'}}>
    <div className="d-flex flex-row">                    
      <div className="col-sm-12">
        <div className="card-deck">
        {polares}

     </div>
   </div>
 </div>
</div>     
    
        
        </div>
    );
  }
}

export default ChartTestigos;