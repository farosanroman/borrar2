import React, { Component } from 'react';
import PieChart, {
    Series ,
    Label ,
    Connector,
    Size,
    Export,Legend
  } from 'devextreme-react/pie-chart';
  class ChartRespuestas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            respuestas:props.respuestas,
            formulario:props.formulario,
            tipo:props.tipo,
            idestado:0,
            index:props.index,
            error:null,
            flag:0,          
            config:null };
      }

  render() {
    const {index, respuestas, formulario,tipo } = this.state;
   // console.log("render chart pies")
   // console.log(index)
   // console.log(formulario)
   // console.log(respuestas)
   // console.log("render chart pies")
   
    var res=[]
    if (tipo=='porc'){
    for (var k = 0; k< formulario.preguntas[index].respuestas.length; ++k) {
      res.push({cant:respuestas[k].porc,respuesta:formulario.preguntas[index].respuestas[k].respuesta})
      //respuestas[k].respuesta=formulario.preguntas[index].respuestas[k].respuesta
    }
  }
  if (tipo=='cant'){
    for (var k = 0; k< formulario.preguntas[index].respuestas.length; ++k) {
      res.push({cant:respuestas[k].cant,respuesta:formulario.preguntas[index].respuestas[k].respuesta})
      //respuestas[k].respuesta=formulario.preguntas[index].respuestas[k].respuesta
    }
  }
    return(
        <div>            
    <PieChart
        id={'resultados'}
        dataSource={res}
        palette={['red','deepskyblue', 'orange', 'limegreen', 'lightgrey', '#DEB887', '#87CEFA', '#BDBDBD']}
        title={this.props.pregunta}
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
      <Series argumentField={'respuesta'} valueField={'cant'} >
         <Label visible={true}>  <Connector visible={true} width={1} /> </Label>
      </Series>
        <Size width={400} />
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

export default ChartRespuestas;