import React, { Component } from 'react';
import ChartRespuestas from './chartrespuestas'
import Chart , {
  ArgumentAxis,
  ArgumentAxisLabel,
  CommonSeriesSettings,
  Legend,
  Label,
  Series,
  Tooltip,
  ValueAxis,
  ValueAxisConstantLine,
  ValueAxisConstantLineLabel,
  ValueAxisLabel,
  Grid,
  Title,Subtitle,
  ConstantLine,Size as SizeS,
  CommonPaneSettings,Border
} from 'devextreme-react/chart';
import PolarChart, {
  Series as SeriesPolar,
  Label as LabelPolar,
  Connector ,
  Size ,
  Export 
} from 'devextreme-react/polar-chart';
//import RadioGroup from 'devextreme-react/ui/radio-group'
import { Card } from 'reactstrap';
//import { Scale } from '@devexpress/dx-react-chart';
//import {estados} from '../data/tablas.json';
import {estados,formularios,A1,A2,D1,D2,D3} from '../data/formularios.json';
//import { Background } from 'devextreme-react/vector-map';
  function customizePercentageText(info) {
      return `${info.valueText}%`;
    }
    //[Faro2016Mensajes].[FaroInicializaFaroEscrutinioSOS] 0
//export default class Chart extends React.PureComponent {
class ChartFaro extends Component { 
constructor(props) {
    super(props);
    this.state = {
     flag:false,
     muestra:[] ,
     totalizacion:[],
    serie:[],
    polarchart:[],
     isLoading: false,
     error:null,
     
     idformulario:props.idformulario,
     formulario:props.formulario,
     nombreformulario:props.nombreformulario,
     idestado:props.idestado,
     nombreestado:props.nombreestado
    };
    this.onChangeFormularios = this.onChangeFormularios.bind(this)
    this.onChangeEstados=this.onChangeEstados.bind(this)
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    //alert(this.props.idestado+" "+this.props.idformulario)
   // alert(JSON.stringify(this.props.formulario))
    var url="https://faro2018consultas.azurewebsites.net/api/polidatatotalizacion?idestado="+this.props.idestado+"&idformulario="+this.props.idformulario+"&muestra=1&estrato=0"
    //alert(url)
    //console.log(url)
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
   .then(totalizacion => this.setState({totalizacion: totalizacion[0],serie:totalizacion[1],polarchart:totalizacion[2] ,isLoading:false}))
   .catch(error => this.setState({ error, isLoading: false }));
    }
    //onSetResult = (muestra) => {
    //  console.log("onSetRsultss sss")
    // console.log
    //  console.log("onSetRsultss sss")
     // this.setState({muestra})
    //  this.setState({flag:true})  
    // this.setState({formulario:D3})       
  ///}
  onChangeFormularios(e) {
    //alert("onChangeFormularios"+e.target.value)
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
  onChangeEstados(e) {
    //console.log(e.target)
    this.setState({idestado:e.target.value})
    //alert(e.target.value)
    let nombreestado=""
    for (let ii = 0; ii < estados.length; ++ii) {
      if (estados[ii].id==e.target.value){
        nombreestado=estados[ii].name
      }
    }
    this.props.onsetestado(e.target.value,nombreestado)
    //alert("onChangeEstado"+e.target.value) 
  }
  render() {     
    const {formulario,totalizacion,serie,polarchart,flag,isLoading,error,isloading } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    if (formulario===undefined){
      return <p>Undefined ...</p>;

    }
  
  let formulariosOpciones=formularios.map(t=>{     
    return(
       <option key={t.idformulario} value={t.idformulario}>{t.nombre} </option>
         )
   } )
   let estadosOpciones=estados.map(t=>{     
    return(
       <option key={t.id} value={t.id}>{t.name} </option>
         )
   } )
    //var s=totalizacion[1]
     //console.log(s)
     const serieD=[]
     if (serie!==undefined){
      //serieD.push({fecha:new Date(serie[0].fecha),cant:0,acum:0})
     for (let i = 0; i < serie.length; ++i) {
        var ii=i+1
        serieD.push({fecha:new Date(serie[i].fecha),cant:ii,acum:ii})
     }
      
    }
  
    let metapolarchart=0;
    let totpolarchart=0;
    for (let k = 0; k < polarchart.length; ++k) {
         totpolarchart+=polarchart[k].F1;
         metapolarchart+=polarchart[k].F2;
        }
    const t=totalizacion[0]
    var ii=-1
    const respuestasC=totalizacion.map(r=>{ 
      ii+=1;
      if (ii<7){      
       return(
           <ChartRespuestas key={ii} index={ii} formulario={formulario} pregunta={formulario.preguntas[ii].titulo} respuestas={r}/>
        )  
       }   
     }) 
 
    return (     
      <Card>
         <select ref="estados" onChange={this.onChangeEstados}>
              {estadosOpciones}
            </select>
           <select ref="formularios" onChange={this.onChangeFormularios}>
              {formulariosOpciones}
            </select>
           
            <h2>
            <span className="badge badge-success m-2">{this.formatNombreEstado()}</span>
            <span className="badge badge-primary m-2">{this.formatNombreFormulario()}</span>
            </h2>
            <div className="row ">
    <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
            <Chart               
               dataSource={serieD}
               id={'serie'}
          >
           <SizeS height={400} width={400} />
           <ValueAxis
            grid={{ opacity: 0.2 }}
            valueType={'currency'}
          />
           <CommonSeriesSettings
            argumentField={'fecha'}
            type={'line'}
          />
         <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode={'crossLabels'}            
          >
          <Label format={'HH:mm'} />
            <Grid visible={true} />
          </ArgumentAxis>
          <CommonPaneSettings>
            <Border
              visible={true}
              width={3}
              top={false}
              right={false}
            />
          </CommonPaneSettings>
          <Series key={'2'} valueField={'acum'} color={'lightgrey'} name={'acumulado'} type={'area'}/>
       
        <Series key={'1'} valueField={'cant'} color={'deepskyblue'} name={'cantidad'} type={'bar'}/>
      
        <Grid visible={true} />
        
          <Legend
            verticalAlignment={'bottom'}
            horizontalAlignment={'center'}
            itemTextPosition={'bottom'}
            visible={true}
          />
         
          <Title text={'Transmision'}>
            <Subtitle text={'(Dia del Evento)'} />
          </Title>
          <Tooltip
          enabled={true}
          shared={true}
        />

      </Chart>




        <PolarChart
        id={'contactos'}
        dataSource={polarchart}
        useSpiderWeb={true}
        commonSeriesSettings= {{type: "line"}}        
        palette={['deepskyblue', 'red', 'limegreen', 'lightgrey', '#DEB887', '#87CEFA', '#BDBDBD']}
        title={'% Recepcion Formularios'}
        tooltip= {{
          enabled: true
        }
      }
      >
       <Series          
          valueField={'F1'} name={totpolarchart+' Recibidas'} 
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series
          
          valueField={'F2'} name={metapolarchart+' Meta'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        
        <Size width={400} />
        <Export enabled={false} />
        <Legend
            verticalAlignment={'bottom'}
            horizontalAlignment={'center'}
            itemTextPosition={'bottom'}
            visible={true}
          />
      </PolarChart>
                    </div>
                    </div>
                </div>
            </div>
           
          
<div className="container-fluid" style={{marginLeft: '10px'}}>
    <div className="row">
    <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="card-deck">
        {respuestasC}
     </div>
   </div>
   </div>
 </div>
</div>
       
        
       
      </Card>
    );
  }
  formatNombreFormulario(f){
    return this.props.nombreformulario
  }
  formatNombreEstado(f){
    return this.props.nombreestado
  }
}
export default ChartFaro;

