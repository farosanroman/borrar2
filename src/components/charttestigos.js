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
     
    
    console.log("render chart testigos")
    console.log(muestra)
    var polarchart1=[
        { "arg": "E1","F1": 0},
        { "arg": "E2","F1": 0},
        { "arg": "E3","F1": 0},
        { "arg": "E4","F1": 0},
        { "arg": "E5","F1": 0},
        { "arg": "E6","F1": 0},
        { "arg": "E7","F1": 0}
        ];
        var polarEstados=[]
        for (var i = 0; i< estados.length-1; ++i) {//-1 es porque son 24 y no 25
              polarEstados.push([0,0,0,0,0,0,0])
              console.log(estados[i].name)
        }
        for (var i = 0; i< muestra.length; ++i) {
            let estado=muestra[i].idestado*1-1
            let estrato=(muestra[i].estratocentro*1-1)
            //console.log(muestra[i].idestado+" "+estado+" "+estrato)
            if(muestra[i].nombretestigo != "SIN OBSERVADOR 9D"){
                console.log("OBSERVADOR")
            polarEstados[estado][estrato]+=1
            //console.log(polarEstados[estado,estrato].F1)
            }
        }
        console.log(polarEstados)
        const ven=[0,0,0,0,0,0,0]
        for (var i = 0; i< estados.length-1; ++i) {
            for (var j = 0; j< 8; ++j) {
             ven[j]+=polarEstados[i][j] 
             //ven[0]+=polarEstados[i][0] 
            }
        }

            var ii=0
            const polares=polarEstados.map(r=>{  
                ii+=1;
                //var n=estados[ii].name
                //var name =estados[ii].name
                 return(
                     
                  <ChartTestigo key={ii} idestado={ii} polard={r} />
              
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