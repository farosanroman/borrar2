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
import { Scale } from '@devexpress/dx-react-chart';
import {formularios,estados} from '../data/tablas.json';

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
     idestado:"00",
     idformulario:"D1"
    };
    this.onChangeFormularios = this.onChangeFormularios.bind(this)
    this.onChangeEstados=this.onChangeEstados.bind(this)
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    var url="https://faro2018consultas.azurewebsites.net/api/polidatatotalizacion?formulario="+this.props.idformulario+"&muestra=1&estrato=0"
    
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
  }
  onChangeFormularios(e) {
    this.setState({idformulario:e.target.value})
   
    this.props.onsetformulario(e.target.value)
    /*
    var url="https://faro2018consultas.azurewebsites.net/api/polidatatotalizacion?formulario="+this.state.idformulario+"&muestra=1&estrato=0"
    //alert(url)
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
   */
  }
  onChangeEstados(e) {
    this.setState({idestado:e.target.value})
    alert("onChangeEstado"+e.target.value) 
  }
  render() {      
    console.log("render chart")
    console.log("this.props.idformulario"+this.props.idformulario)
    //this.setState({idformulario:this.props.idformulario})
    const {muestra,totalizacion,serie,polarchart,flag,isLoading,error,isloading } = this.state;
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
        
        palette={['deepskyblue', 'orange', 'limegreen', 'lightgrey', '#DEB887', '#87CEFA', '#BDBDBD']}
        
        title={'% Recepcion Formularios'}
        tooltip= {{
          enabled: true
        }
      }
      >
        <Series          
          valueField={'F1'} name={'A1'} 
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series
          
          valueField={'F2'} name={'A2'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series
          
          valueField={'F3'} name={'D1'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series
          
          valueField={'F4'} name={'D2'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Size width={400} />
        <Export enabled={true} />
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
}
export default ChartFaro;

