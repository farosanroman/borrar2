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
import RadioGroup from 'devextreme-react/ui/radio-group'
import { Card } from 'reactstrap';
//import { Scale } from '@devexpress/dx-react-chart';
import {formularios,estados} from '../data/tablas.json';
import {D1,D2,D3} from '../data/formularios.json';
  function customizePercentageText(info) {
      return `${info.valueText}%`;
    }
    
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
     
     idformulario:this.props.idformulario,
     formulario:this.props.formulario,
     idestado:this.props.idestado
    };
    this.onChangeFormularios = this.onChangeFormularios.bind(this)
    this.onChangeEstados=this.onChangeEstados.bind(this)
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    alert(this.props.idestado)
    var url="https://faro2018consultas.azurewebsites.net/api/polidatatotalizacion?estado="+this.props.idestado+"&formulario="+this.props.idformulario+"&muestra=1&estrato=0"
    console.log(url)
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
    onSetResult = (muestra) => {
      //console.log("onSetRsultss sss")
      this.setState({muestra})
      this.setState({flag:true})  
     //this.setState({formulario:D3})       
  }
  onChangeFormularios(e) {
    this.setState({idformulario:e.target.value})
    this.setState({formulario:"Otro Formulario"})
    this.props.onsetformulario(e.target.value,"Otro Formulario")
    
  }
  onChangeEstados(e) {
    this.setState({idestado:e.target.value})
    //alert(e.target.value)
    this.props.onsetestado(e.target.value)
    //alert("onChangeEstado"+e.target.value) 
  }
  render() {      
    console.log("render chart")
    console.log("this.props.idformulario"+this.props.idformulario)
    this.formatFormulario("Primera opcion")
    //this.setState({idformulario:this.props.idformulario})
    const {muestra,totalizacion,serie,polarchart,flag,isLoading,error,isloading } = this.state;
    console.log(D3)
    console.log("render chart")
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    if (totalizacion===undefined){
      return <p>Undefined ...</p>;

    }
  //console.log(totalizacion)
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
    var s=totalizacion[1]
     //console.log(s)
     const serieD=[]
     if (serie!==undefined){
     for (let i = 0; i < serie.length; ++i) {
        serieD.push({fecha:new Date(serie[i].fecha),cant:i,acum:i})
     }
      
    }
    var texto=["Ubicacion Punto Rojo","Solicitud Carnet P","Propaganda Electoral","Colas","qq","aa"] 
    console.log(totalizacion)
    
    let totpolarchart=0;
    for (let k = 0; k < polarchart.length; ++k) {
         totpolarchart+=polarchart[k].F1;

    }
    const t=totalizacion[0]
    var ii=-1
    const respuestasC=totalizacion.map(r=>{  
      ii+=1;
      if (ii<7){
       return(
        <ChartRespuestas key={ii} pregunta={texto[ii]} respuestas={totalizacion[ii]}/>
    
           )  
       }   
     }) 
    
   //return <p>Loading...</p>

    return (
     
      <Card>
           <select ref="formularios" onChange={this.onChangeFormularios}>
              {formulariosOpciones}
            </select>
            <select ref="estados" onChange={this.onChangeEstados}>
              {estadosOpciones}
            </select>
            <h2>
              <span className="badge badge-primary m-2">{this.formatFormulario()}</span>
              <span className="badge badge-success m-2">{this.formatFormulario()}</span>
            
            </h2>
           <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
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
          
          valueField={'F2'} name={'170 Meta'}
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
           
          
<div className="container-fluid" style={{marginLeft: '-15px'}}>
    <div className="d-flex flex-row">                    
      <div className="col-sm-12">
        <div className="card-deck">
        {respuestasC}
     </div>
   </div>
 </div>
</div>
       
        
       
      </Card>
    );
  }
  formatFormulario(f){
    return this.state.formulario
  }
}
export default ChartFaro;

