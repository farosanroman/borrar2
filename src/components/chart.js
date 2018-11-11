import * as React from 'react';
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
import {serie} from '../data/serie.json';
import {polar} from '../data/polar.json';
//getCirclePaint = (jsondate) => (
//  var a=1
//);
const serieD=[]
for (let i = 0; i < serie.length; ++i) {
 serieD.push({fecha:new Date(serie[i].fecha),cant:i,acum:i})
}
let polardata=[
  { "arg": "E1","F1": 0},
  { "arg": "E2","F1": 0},
  { "arg": "E3","F1": 0},
  { "arg": "E4","F1": 0},
  { "arg": "E5","F1": 0},
  { "arg": "E6","F1": 0},
  { "arg": "E7","F1": 0}

];
for (let i = 0; i < polar.length; ++i) {
  //var cant=polardata[polar[i].ec-1].F1 
  polardata[polar[i].ec-1].F1 += 1
 }
 
 

var respuestas1=
[{"respuesta": "<200mts","porc": 40.3},
 {"respuesta": ">200mts","porc":34.34},
{"respuesta": "Dentro","porc": 2.3},
 {"respuesta": "No Hay","porc": .34}
]
var respuestas2=
[{"respuesta": "En Punto Rojo","porc": 40.3},
 {"respuesta": "En Centro o Mesa","porc":34.34},
{"respuesta": "No solicitada","porc": 2.3},
 {"respuesta": "No Abrio","porc": .34}
]
var respuestas3=
[{"respuesta": "Adentro Centro","porc": 40.3},
 {"respuesta": "Afuera Centro","porc":34.34},
{"respuesta": "Adentro y Afuera","porc": 2.3},
 {"respuesta": "No Abrio","porc": .34}
]
var respuestas4=
[{"respuesta": "<20","porc": 40.3},
 {"respuesta": ">20 <50","porc":34.34},
{"respuesta": ">50","porc": 2.3},
 {"respuesta": "No Abrio","porc": .34}
]

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
    function customizePercentageText(info) {
      return `${info.valueText}%`;
    }
    
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
     flag:null
      
    };
  }
  
  render() {  
    let i=0

    //let preguntas=[];
    //const preguntas=respuesta.preguntas.map(p=> 
    //   p.estratos   
    //)
    
    console.log("ddddddddddd")
    //console.log(preguntas)
    //alert(JSON.stringify(preguntas))
    let propspreguntas=[]
    for (let i = 0; i < respuestasjson.preguntas.length; ++i) {
          propspreguntas.push(respuestasjson.preguntas[i].estratos[0].respuestas)
    }
    console.log(propspreguntas)
    for (let i = 0; i < respuestasjson.preguntas.length; ++i) {
      for (let j = 0; j <   respuestasjson.preguntas[i].estratos.length; ++j) {
        for (let k = 0; k < respuestasjson.preguntas[i].estratos[j].respuestas.length; ++k) {
          propspreguntas[i][k].cant+=respuestasjson.preguntas[i].estratos[j].respuestas[k].cant
          //respuestasjson.preguntas[i].estratos[j].respuestas[k].cant
        }
     }
    }
    console.log(propspreguntas)

     
    console.log(propspreguntas)
    console.log("-----------------------")
    //console.log(preguntas)
    
    const pies2=propspreguntas.map(p=>{ 

      i+=1;
       return(
         <ChartRespuestas key={i} respuestas={p}
         />
           )     
     }
     ) 
     const pies=[
     <ChartRespuestas key={1} pregunta={'Ubicacion Punto Rojo'} respuestas={respuestas1}/>,
      <ChartRespuestas key={2} pregunta={'Solicitan Carnet de la Patria'} respuestas={respuestas2}/>,
      <ChartRespuestas key={3} pregunta={'Propaganda Electoral'} respuestas={respuestas3}/>,
      <ChartRespuestas key={4} pregunta={'Participacion'} respuestas={respuestas4}/>
    ]
    return (
      <Card>
           <h5>Centros de la Muestra</h5>
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
          visible={true}
        />
          <Legend
            verticalAlignment={'bottom'}
            horizontalAlignment={'center'}
            itemTextPosition={'bottom'}
          />
         
          <Title text={'Llegada de Formularios'}>
            <Subtitle text={'(Dia del Evento)'} />
          </Title>
          <Tooltip
          enabled={true}
          shared={true}
        />

      </Chart>




        <PolarChart
        id={'contactos'}
        dataSource={polardata}
        useSpiderWeb={true}
        commonSeriesSettings= {{type: "line"}}
        palette={['deepskyblue', '#FFC0CB', '#808000', '#A2CD5A', '#DEB887', '#87CEFA', '#BDBDBD']}
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
       {pies}
                 
     </div>
   </div>
 </div>
</div>
       
        
       
      </Card>
    );
  }
}

/*
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