import React, { Component } from 'react';
  import PolarChart, {
    Series ,
    Label ,
    Connector ,
    Size ,
    Export ,Legend,Title,Subtitle
  } from 'devextreme-react/polar-chart';
  import {estados} from '../data/tablas.json';
  class ChartTestigo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            polard:this.props.polard,
            idestado:this.props.idestado
        };
      }
    
  render() {
    const { polard,idestado } = this.state;
    var polar1=[
        { "arg": "E1","F1": polard[0],"F2":5},
        { "arg": "E2","F1": polard[1],"F2":5},
        { "arg": "E3","F1": polard[2],"F2":5},
        { "arg": "E4","F1": polard[3],"F2":5},
        { "arg": "E5","F1": polard[4],"F2":5},
        { "arg": "E6","F1": polard[5],"F2":5},
        { "arg": "E7","F1": polard[6],"F2":5}
        ];
        const estado=estados[idestado].name
        let ww='250';
        if (idestado===0){
            ww='400'
            polar1=[
                { "arg": "E1","F1": polard[0],"F2":170},
                { "arg": "E2","F1": polard[1],"F2":170},
                { "arg": "E3","F1": polard[2],"F2":170},
                { "arg": "E4","F1": polard[3],"F2":170},
                { "arg": "E5","F1": polard[4],"F2":170},
                { "arg": "E6","F1": polard[5],"F2":170},
                { "arg": "E7","F1": polard[6],"F2":170}
                ];
        }
        let totasignaciones=0
        for (var i = 0; i< polard.length-1; ++i) {
          totasignaciones+=polard[i]
        }
        
    return(
        <div>
            
    <PolarChart
        id={'contactos'}
        dataSource={polar1}
        useSpiderWeb={true}
        commonSeriesSettings= {{type: "line"}}        
       // palette={['deepskyblue', 'red', 'limegreen', 'lightgrey', '#DEB887', '#87CEFA', '#BDBDBD']}
        title={estado}
        tooltip= {{enabled: true}
         }
      >
      <Title text={estado}  size={1}>
           
          </Title>
        <Series          
          valueField={'F1'} name={totasignaciones+' Asignaciones'}   width={1} color={'deepskyblue'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series          
          valueField={'F2'} name={'Meta'}  width={1} color={'red'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Size width={ww} />
        <Export enabled={false} />
        <Legend
            verticalAlignment={'bottom'}
            horizontalAlignment={'center'}
            itemTextPosition={'bottom'}
            visible={true}
          />
      </PolarChart>

        
        </div>
    );
  }
}

export default ChartTestigo;