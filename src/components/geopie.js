import React, { Component } from 'react';
import PieChart, {
    Series ,
    Label ,
    Connector,
    Size,
    Export,Legend
  } from 'devextreme-react/pie-chart';
  class GeoPie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            respuestas:{"pregunta":"orientacion"},
           
            error:null,
            flag:0,          
            config:null };
      }

  render() {
    const {respuestas } = this.state;
   // console.log("render chart pies")
   // console.log(index)
   // console.log(formulario)
   // console.log(respuestas)
   // console.log("render chart pies")
   
    var res=[
        {"cant":0,"respuesta":"steelblue"},
    {"cant":0,"respuesta":"white"},{"cant":0,"respuesta":"yellow"},
    {"cant":0,"respuesta":"orange"},{"cant":0,"respuesta":"mediumblue"},
    ]
    
    /*
  if (tipo=='cant'){
    for (var k = 0; k< formulario.preguntas[index].respuestas.length; ++k) {
      res.push({cant:respuestas[k].cant,respuesta:formulario.preguntas[index].respuestas[k].respuesta})
      //respuestas[k].respuesta=formulario.preguntas[index].respuestas[k].respuesta
    }
  }
  */
    return(
        <div>            
    <PieChart
        id={'resultados'}
        dataSource={res}
        palette={['steelblue','white', 'yellow', 'orange', 'mediumblue', '#DEB887', '#87CEFA', '#BDBDBD']}
        title={this.state.pregunta}
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
      <Series argumentField={'respuesta'} valueField={'cant'} >
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

export default GeoPie;