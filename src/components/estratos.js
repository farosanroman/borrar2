import React, { Component } from 'react';
import ChartEstrato from './estrato'
//import {estados} from '../data/tablas.json';
import {estados,formularios,A1,A2,D1,D2,D3} from '../data/formularios.json';
import {estratos} from '../data/tablas.json';
  class ChartEstratos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            muestra:[],
            isLoading: false,
            error:null,
            idformulario:props.idformulario,
            formulario:props.formulario,
            nombreformulario:props.nombreformulario,
            idestrato:1
         };
         this.onChangeFormularios = this.onChangeFormularios.bind(this)
         this.onChangeEstrato=this.onChangeEstrato.bind(this)  
      }
      componentDidMount() {
        this.setState({ isLoading: true });
        var url="https://faro2018consultas.azurewebsites.net/api/polidatatotalizacion?idestado=00&idformulario="+this.props.idformulario+"&muestra=1&estrato=1"
        fetch(url)
     
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
        onChangeFormularios(e) {
            //alert("onChangeFormularios "+e.target.value)
            this.setState({idformulario:e.target.value})
            let formjson=null;
            if (e.target.value=="A1"){
              this.setState({formulario:A1})
              this.props.onsetformulario(e.target.value,A1,"A1 "+A1.nombre)
            }
            if (e.target.value=="A2"){
              this.setState({formulario:A2})
              this.props.onsetformulario(e.target.value,A2,"A2 "+A2.nombre)
            }
            if (e.target.value=="D1"){
              this.setState({formulario:D1})
              this.props.onsetformulario(e.target.value,D1,"D1 "+D1.nombre)
            }
            if (e.target.value=="D2"){
              this.setState({formulario:D2})
              this.props.onsetformulario(e.target.value,D2,"D2 "+D2.nombre)
            }
            if (e.target.value=="D3"){
              this.setState({formulario:D3})
              this.props.onsetformulario(e.target.value,D3,"D3 "+D3.nombre)
            }
    }
    onChangeEstrato(e) {
        this.setState({idestrato:e.target.value})
       // alert("onChangeEstrato"+e.target.value) 
      }
  render() {
    const {idestrato,idestado,formulario,nombreformulario,muestra,isLoading,error } = this.state;
    let formulariosOpciones=formularios.map(t=>{        
        return(
           <option key={t.idformulario} value={t.idformulario}>{t.nombre} </option>
             )
       } )
       var ie=0
       let estratosOpciones=estratos.map(e=>{  
        if (ie>0){   
        return(
           <option key={e.id} value={e.id}>{e.nombre}</option>
             )
            }
            ie+=1
       } )
    if (error) {
        return <p>{error.message}</p>;
      }
  
      if (isLoading) {
        return <p>Loading ...</p>;
      }
      if (muestra.length==0){
        return <p>Loading2 ...</p>; 
      }
     
      var muestra2=[]
     // var formularios=[]
      var preguntas=[]
      var cantmuestraformulario=0
      for (var p = 0; p< 6; ++p) {
          //console.log("pregunta"+p)
          //console.log(muestra[p])
          for (var e = 1; e< muestra[p].length; ++e) {
              //alert(JSON.stringify(muestra[p]))
             
             if ((e)==idestrato){
                var respuestas=[]
                for (var r = 0; r< muestra[p][e].length; ++r) {
                  //alert(JSON.stringify(muestra[p][e][r]))  
                  respuestas.push(muestra[p][e][r])
                  if ((r==0)&&(p==0)){ 
                     cantmuestraformulario+=muestra[p][e][r].tot  
                  }   
                }
                preguntas.push(respuestas)
             }
             
          }
        
      }
      //console.log("respuestas")
     // console.log(preguntas)
      var chart=[]
      for (var k = 0; k< preguntas.length; ++k) {       
        chart.push(<ChartEstrato key={k} index={k} tipo={'porc'} formulario={formulario} idestrato={idestrato} pregunta={preguntas[k]} />) 
         //alert (JSON.stringify(resp))
        //
      }
      //console.log(chart)
    return(
        <div>
             <select ref="estratos" onChange={this.onChangeEstrato}>
              {estratosOpciones}
            </select>
             <select ref="formularios" onChange={this.onChangeFormularios}>
              {formulariosOpciones}
            </select>
                <h2>
            <span className="badge badge-warning m-2">{'Estrato '+idestrato+' ('+cantmuestraformulario+' formularios)'}</span>
            </h2>
            <h2>
            <span className="badge badge-success m-2">{'Formulario '+nombreformulario}</span>
            </h2>
        <div className="row ">
    <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
        {chart}

     </div></div>
  
 </div>
</div>   
        </div>
    );
  }
}

export default ChartEstratos;