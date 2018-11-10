import React, { Component } from 'react';
import PieChart, {
    Series ,
    Label ,
    Connector,
    Size,
    Export
  } from 'devextreme-react/pie-chart';
  class ChartRespuestas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            respuestas:this.props.respuestas,
            
            flag:0,          
            config:null };
      }

  render() {
    const { respuestas } = this.state;
    return(
        <div>
            
    <PieChart
        id={'resultados'}
        dataSource={respuestas}
        palette={'Bright'}
        title={'Orientacion Tecnologica'}
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
      <Series argumentField={'respuesta'} valueField={'porc'} >
         <Label visible={true}>  <Connector visible={true} width={1} /> </Label>
      </Series>
        <Size width={500} />
        <Export enabled={true} />
      </PieChart>

        
        </div>
    );
  }
}

export default ChartRespuestas;