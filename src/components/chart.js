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

const serieF=[];
    serieF.push({ "fecha": new Date(1994, 2, 1), "qty": 0,"acum":0 })
    serieF.push({ "fecha": new Date(1994, 2, 4), "qty":5,"acum":5 })
    serieF.push({ "fecha": new Date(1994, 3, 6), "qty": 10,"acum":15 })
    serieF.push({ "fecha": new Date(1994, 3, 20), "qty": 6,"acum":21 })
    serieF.push({ "fecha": new Date(1994, 5, 6), "qty": 10,"acum":31 })
    
 const polardata=
    [{
      "arg": "E1",
      "F1": 80.1,
      "F2": 72.22,
      "F3": 50.8,
      "F4": 30.47
  }, {
      "arg": "E2",
      "F1": 75.1,
      "F2": 64.22,
      "F3": 43.8,
      "F4": 22.47
  }, {
      "arg": "E3",
      "F1": 90.1,
      "F2": 52.22,
      "F3": 40.8,
      "F4": 20.47
  }, {
      "arg": "E4",
      "F1": 70.1,
      "F2": 42.22,
      "F3": 20.8,
      "F4": 12.47
  }, {
      "arg": "E5",
      "F1": 82.1,
      "F2": 64.22,
      "F3": 54.8,
      "F4": 23.47
  },
  {
    "arg": "E6",
    "F1": 81.1,
    "F2": 56.22,
    "F3": 30.8,
    "F4": 20.47
}, {
    "arg": "E7",
    "F1": 50.1,
    "F2": 30.22,
    "F3": 10.8,
    "F4": 5.47
}
]

var respuestas1=
[{
  "respuesta": "Antes 7am",
  "porc": 40.3
}, {
  "respuesta": "Entre 7am - 8am",
  "porc":34.34
}, {
  "respuesta": "Despues de 10am",
  "porc": 2.3
}
, {
  "respuesta": "Nunca",
  "porc": .34
}
]
var respuestas2=
[{
  "respuesta": "Si",
  "porc": 64.3
}, {
  "respuesta": "No",
  "porc":34.34
}
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
      /*
       let pregunta0=preguntas[i][0].respuestas
      console.log(".............")
       console.log(pregunta0)
       console.log(".............")
       for (var j = 0; j < pregunta0.length; ++j) {
           pregunta0[j].cant=0
           pregunta0[j].porc=0
       }
       
       for (var jestrato = 0; jestrato < preguntas[i].length; ++jestrato) {
       
        for (let k = 0; k < preguntas[i].length; ++k) {
          pregunta0[k].cant=preguntas[i][k].cant
          //pregunta0[j].porc=cant=preguntas[i].respuesta[k].cant
         }
       
        }
       propspreguntas.push(pregunta0)
       */
     
    console.log(propspreguntas)
    console.log("-----------------------")
    //console.log(preguntas)
    
    const pies=propspreguntas.map(p=>{ 

      i+=1;
       return(
         <ChartRespuestas key={i} respuestas={p}
         />
           )     
     }
     ) 
     
    return (
      <Card>
           <h5>Centros de la Muestra</h5>
           <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                    <div className="card-deck">

                    <Chart               
               dataSource={serieF}
               id={'serieF'}
               
           >
           <SizeS height={500} width={500} />
           <ValueAxis
            grid={{ opacity: 0.2 }}
            valueType={'numeric'}
          />
           <CommonSeriesSettings
            argumentField={'fecha'}
            type={'line'}
          />
         <ArgumentAxis
            valueMarginsEnabled={false}
            discreteAxisDivisionMode={'crossLabels'}            
          >
          <Label format={'datetime'} />
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
       
        <Series key={'1'} valueField={'qty'} name={'cantidad'} type={'bar'}/>
      
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
        palette={'Bright'}
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
        <Size width={500} />
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