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
    //console.log("render chart pies")
    //console.log(respuestas)
    return(
        <div>
            
    <PieChart
        id={'resultados'}
        dataSource={respuestas}
        palette={['deepskyblue', 'orange', 'limegreen', 'lightgrey', '#DEB887', '#87CEFA', '#BDBDBD']}
        
        title={this.props.pregunta}
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
      <Series argumentField={'respuesta'} valueField={'cant'} >
         <Label visible={true}>  <Connector visible={true} width={1} /> </Label>
      </Series>
        <Size width={400} />
        <Export enabled={false} />
      </PieChart>

        
        </div>
    );
  }
}

export default ChartRespuestas;