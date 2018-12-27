import React, { Component } from 'react';

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
class GeoCharts extends Component { 
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
  //  this.onChangeFormularios = this.onChangeFormularios.bind(this)
  //  this.onChangeEstados=this.onChangeEstados.bind(this)
  }
  
  
  render() {     
    const {idestado,formulario,totalizacion,serie,polarchart,flag,isLoading,error,isloading } = this.state;
    let flagEstado=true;
    if (idestado!='00'){
      flagEstado=false
    }
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    
  
    //var s=totalizacion[1]
     //console.log(s)
     const serieD=[]
     if (serie!==undefined){
      //serieD.push({fecha:new Date(serie[0].fecha),cant:0,acum:0})
     for (let i = 0; i < serie.length; ++i) {
        var ii=i+1
        if (serie[i].medio=="CC"){
         serieD.push({fecha:new Date(serie[i].fecha),cant:ii,acum:ii})
        }else{
          serieD.push({fecha:new Date(serie[i].fecha),polidata:ii,acum:ii})
        
        }
     }
     var min = Math.ceil(100);
    var max = Math.floor(0);
    var pos= Math.floor(Math.random() * (max - min + 1)) + min;
     serieD.push({fecha:new Date(2018,1,1,2),cant:1,acum:1})
     serieD.push({fecha:new Date(2018,1,1,pos+2),cant:2,acum:2})
     serieD.push({fecha:new Date(2018,1,1,pos+8),cant:4,acum:4})
     
     serieD.push({fecha:new Date(2018,1,1,pos+12),cant:2,acum:2})
     serieD.push({fecha:new Date(2018,1,1,pos+17),cant:4,acum:4})
    }
    let polar1=[
      { "arg": "E1","F0": 100,"F1":pos+12,"F2":pos+33,"F3":pos+56,"FF":0},
      { "arg": "E2","F0": 100,"F1":pos+23,"F2":pos+43,"F3":pos+34,"FF":0},
      { "arg": "E3","F0": 100,"F1":pos+34,"F2":pos*2,"F3":pos+34,"FF":0},
      { "arg": "E4","F0": 100,"F1":pos+12,"F2":pos+23,"F3":98,"FF":0},
      { "arg": "E5","F0":100,"F1":pos*1.5,"F2":pos*1.3+22,"F3":pos*1.3,"FF":0},
      { "arg": "E6","F0": 100,"F1":pos*1.7,"F2":pos*1.2+34,"F3":pos+67,"FF":0},
      { "arg": "E7","F0": 100,"F1":pos*2,"F2":pos+54,"F3":pos*1.4,"FF":0}
      ];
    let metapolarchart=0;
    let totpolarchart=0;
  
    return (     
      <Card>
            
            <div className="row ">
    <div className="d-flex flex-row ">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
            <Chart               
               dataSource={this.props.serie}
               id={'serie'}
          >
           <SizeS height={400} width={380} />
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
        <Series key={'3'} valueField={'polidata'} color={'darkorange'} name={'polidata'} type={'bar'}/>
      
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
        dataSource={polar1}
        useSpiderWeb={true}
        commonSeriesSettings= {{type: "line"}}        
        palette={['deepskyblue', 'red', 'limegreen', 'lightgrey', '#DEB887', '#87CEFA', '#BDBDBD']}
        title={'% Recepcion Formularios'}
        
        tooltip= {{
          enabled: true
        }
      }
      >
      <Size width={380} />
      <Series
          
          valueField={'F0'} name={'.'} color={'lightgray'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
      <Series
          
          valueField={'F2'} name={metapolarchart+' Meta'} color={'red'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
       <Series          
          valueField={'F1'} name={totpolarchart+' Recibidos'} color={'deepskyblue'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        
        <Series          
          valueField={'F3'} name={' error'} color={'purple'}
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
    {flagEstado&& <div>      
            <h2>
  <span className="badge badge-warning m-2">{'Resultados de Formularios (%)'}</span>
</h2>

  </div>  }
        


       
        
       
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
export default GeoCharts;