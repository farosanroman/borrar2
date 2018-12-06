import React, { Component } from 'react';
import PieChart, {
    Series ,
    Label ,
    Connector,
    Size,
    Export,Legend
  } from 'devextreme-react/pie-chart';
  class ChartEstrato extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pregunta:props.pregunta,
            //respuestas:props.respuestas,
            formulario:props.formulario,
            tipo:props.tipo,
            idestado:0,
            idestrato:props.idestrato,
            index:props.index,
            error:null,
            flag:0,          
            config:null };
      }

  render() {
    const {index,pregunta, formulario,tipo,idestrato } = this.state;
   // alert(JSON.stringify(preguntas))
    var resp2=[]
    resp2.push({porc:30,respuesta:'res 1'})
    resp2.push({porc:50,respuesta:'res 2'})
   
   var resp=[]
       //for (var kk = 0; kk< this.props.pregunta.length; ++kk) {
        var pre=formulario.preguntas[index].titulo
        for (var kk = 0; kk< formulario.preguntas[index].respuestas.length; ++kk) {
            // console.log(JSON.stringify(preguntas[k][kk].porc))
            //alert(JSON.stringify(formulario.preguntas[0].respuestas[0].respuesta))
            //const pre=formulario.preguntas[0].respuestas[kk].respuesta
            //for (var kkk = 0; kkk< formulario.preguntas[index].respuestas.length; ++kkk) {
              var res=formulario.preguntas[index].respuestas[kk].respuesta;
               resp.push({porc:(this.props.pregunta[kk].porc).toFixed(2),respuesta:res})
            //}
        }
   /* 
   for (var kk = 0; kk< pregunta.length; ++kk) {
            // console.log(JSON.stringify(preguntas[k][kk].porc))
             resp.push({porc:(pregunta[kk].porc).toFixed(2),respuesta:'resp '+kk})
            
        }

    if (tipo=='porc'){
    for (var k = 0; k< formulario.preguntas[index].respuestas.length; ++k) {
     // res.push({cant:respuestas[k].porc,respuesta:formulario.preguntas[index].respuestas[k].respuesta})
      //respuestas[k].respuesta=formulario.preguntas[index].respuestas[k].respuesta
    }
  }
  if (tipo=='cant'){
    for (var k = 0; k< formulario.preguntas[index].respuestas.length; ++k) {
     // res.push({cant:respuestas[k].cant,respuesta:formulario.preguntas[index].respuestas[k].respuesta})
      //respuestas[k].respuesta=formulario.preguntas[index].respuestas[k].respuesta
    }
  }
  */

    return(
        <div>            
    <PieChart
        id={'resultados'}
        dataSource={resp}
        palette={['red','deepskyblue', 'orange', 'limegreen', 'lightgrey', '#DEB887', '#87CEFA', '#BDBDBD']}
        title={pre}
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
      <Series argumentField={'respuesta'} valueField={'porc'} >
         <Label visible={true}>  <Connector visible={true} width={1} /> </Label>
      </Series>
        <Size width={380} />
        <Export enabled={false} />
        <Legend
            verticalAlignment={'bottom'}
            horizontalAlignment={'center'}
            itemTextPosition={'bottom'}
            visible={true}
          />
      </PieChart>

        
        </div>
    );
  }
}

export default ChartEstrato;