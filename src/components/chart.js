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

//getCirclePaint = (jsondate) => (
//  var a=1
//);


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
     matriz:[],
     isLoading: false,
     error:null
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    var url="http://faro2018consultas.azurewebsites.net/api/nodosmuestrajsonsumate";
    url="http://faro2018consultas.azurewebsites.net/api/polidatatotalizacion"
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
   .then(totalizacion => this.setState({ totalizacion ,isLoading:false}))
   .catch(error => this.setState({ error, isLoading: false }));

  

    }
    onSetResult = (muestra) => {
      //console.log("onSetRsultss sss")
      this.setState({muestra})
      this.setState({flag:true})
         
  }
  render() {  
    let i=0
    console.log("render")
    const {muestra,totalizacion,flag,isLoading,error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
  }

    var s=totalizacion[5]
     console.log(s)
     const serieD=[]
     if (s!==undefined){
     for (let i = 0; i < s.length; ++i) {
        serieD.push({fecha:new Date(s[i].fecha),cant:i,acum:i})
     }
      
    }
    var texto=["Ubicacion Punto Rojo","Solicitud Carnet P","Propaganda Electoral","Colas"] 
    ///console.log(propspreguntas)
    var ii=-1
    const respuestasC=totalizacion.map(r=>{     
      ii+=1;
      if (ii<5){
       return(
        <ChartRespuestas key={ii} pregunta={texto[ii]} respuestas={totalizacion[ii]}/>
    
           )  
       }   
     }) 
     
   //return <p>Loading...</p>

    return (
      <Card>
          
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
        dataSource={totalizacion[4]}
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

/*
var respuestasjson=
{
  codcne:"13",
  nombre:"Estado Miranda",
  idformulario:"A1",
  formulario:"Preferencias Tecnologicas",
  respuestas:"230",
      preguntas:[
         {
         idpregunta:1,pregunta:"Quiere Usted Salir del Mundo Relacional",
         estratos:[
             {estrato:1 , 
              respuestas:[
                  {respuesta:"Si",cant:23,porc:10.34},
                  {respuesta:"No",cant:54,porc:20.34},
                  {respuesta:"No entiendo porque",cant:23,porc:10.34},
                  {respuesta:"No es necesario",cant:54,porc:20.34},         
          ] 
        },
        {estrato:2 , 
          respuestas:[
              {respuesta:"Si",cant:13,porc:10.34},
              {respuesta:"No",cant:64,porc:20.34},
              {respuesta:"No entiendo porque",cant:13,porc:10.34},
              {respuesta:"No es necesario",cant:54,porc:20.34},         
         ] 
       },
       {estrato:3 , 
        respuestas:[
            {respuesta:"Si",cant:23,porc:10.34},
            {respuesta:"No",cant:54,porc:20.34},
            {respuesta:"No entiendo porque",cant:23,porc:10.34},
            {respuesta:"No es necesario",cant:54,porc:20.34},         
           ] 
        }
        ]
         },
         {
          idpregunta:2,pregunta:"Cual es su Front End ",
          estratos:[
              {estrato:1 , 
               respuestas:[
                {respuesta:"jQuery",cant:23,porc:10.34},
                {respuesta:"React",cant:54,porc:20.34},
                {respuesta:"Vue",cant:23,porc:10.34},
                {respuesta:"Angular",cant:54,porc:20.34},  
                  ] 
         },
         {estrato:2 , 
           respuestas:[
            {respuesta:"jQuery",cant:23,porc:10.34},
            {respuesta:"React",cant:54,porc:20.34},
            {respuesta:"Vue",cant:23,porc:10.34},
            {respuesta:"Angular",cant:54,porc:20.34},         
    ] 
        },
        {estrato:3 , 
         respuestas:[
          {respuesta:"jQuery",cant:23,porc:10.34},
          {respuesta:"React",cant:54,porc:20.34},
          {respuesta:"Vue",cant:23,porc:10.34},
          {respuesta:"Angular",cant:54,porc:20.34},         
         ] 
         }
         ]
          },
          {
            idpregunta:3,pregunta:"Cual es su Plataforma Cloud",
            estratos:[
                {estrato:1 , 
                 respuestas:[
                  {respuesta:"Azure",cant:23,porc:10.34},
                  {respuesta:"AWS",cant:54,porc:20.34},
                  {respuesta:"IBM",cant:23,porc:10.34},
                  {respuesta:"Amazon",cant:54,porc:20.34},
                    ] 
           },
           {estrato:2 , 
             respuestas:[
              {respuesta:"Azure",cant:23,porc:10.34},
              {respuesta:"AWS",cant:54,porc:20.34},
              {respuesta:"IBM",cant:23,porc:10.34},
              {respuesta:"Amazon",cant:54,porc:20.34},         

            ] 
          },
          {estrato:3 , 
           respuestas:[
            {respuesta:"Azure",cant:23,porc:10.34},
            {respuesta:"AWS",cant:54,porc:20.34},
            {respuesta:"IBM",cant:23,porc:10.34},
            {respuesta:"Amazon",cant:54,porc:20.34},         
         ] 
           }
           ]
            }
       ]
  

}
   let propspreguntas=[]
    for (let i = 0; i < respuestasjson.preguntas.length; ++i) {
          propspreguntas.push(respuestasjson.preguntas[i].estratos[0].respuestas)
    }
    for (let i = 0; i < respuestasjson.preguntas.length; ++i) {
      for (let j = 0; j <   respuestasjson.preguntas[i].estratos.length; ++j) {
        for (let k = 0; k < respuestasjson.preguntas[i].estratos[j].respuestas.length; ++k) {
          propspreguntas[i][k].cant+=respuestasjson.preguntas[i].estratos[j].respuestas[k].cant
          //respuestasjson.preguntas[i].estratos[j].respuestas[k].cant
        }
     }
    }
argumentAxis: {
        valueMarginsEnabled: false,
        discreteAxisDivisionMode: "crossLabels",
        grid: { visible: true },
        label: {
            //overlappingBehavior: {  mode: 'stagger', staggeringSpacing: 0},
            overlappingBehavior: { mode: 'rotate', rotationAngle: 45, indentFromAxis: 1 },
            //customizeText: function (arg) {

            //    return arg.value.getMonths() + ":" + arg.value.getDays()
            //     //return Globalize.format(arg.value, "hh:mm")
            //},
            //format: "yyyy-MMdd HH:mm:ss"
            format: "MMdd"

        },


        */