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
            polard:props.polard,
            idestado:props.idestado,
            r:props.r
        };
      }
    
  render() {
    const {r, polard,idestado } = this.state;
    let ww='400';
    var polar1=[
        { "arg": "E1","F2": r.e1,"F1":r.m1,"F3":r.tot1},
        { "arg": "E2","F2": r.e2,"F1":r.m2,"F3":r.tot2},
        { "arg": "E3","F2": r.e3,"F1":r.m3,"F3":r.tot3},
        { "arg": "E4","F2": r.e4,"F1":r.m4,"F3":r.tot4},
        { "arg": "E5","F2": r.e5,"F1":r.m5,"F3":r.tot5},
        { "arg": "E6","F2": r.e6,"F1":r.m6,"F3":r.tot6},
        { "arg": "E7","F2": r.e7,"F1":r.m7,"F3":r.tot7}
        ];

        const estado=estados[idestado].name
        
        if (idestado===0){
            ww='400'
            polar1=[
              { "arg": "E1","F2": r.e1,"F1":r.m1,"F3":r.tot1},
              { "arg": "E2","F2": r.e2,"F1":r.m2,"F3":r.tot2},
              { "arg": "E3","F2": r.e3,"F1":r.m3,"F3":r.tot3},
              { "arg": "E4","F2": r.e4,"F1":r.m4,"F3":r.tot4},
              { "arg": "E5","F2": r.e5,"F1":r.m5,"F3":r.tot5},
              { "arg": "E6","F2": r.e6,"F1":r.m6,"F3":r.tot6},
              { "arg": "E7","F2": r.e7,"F1":r.m7,"F3":r.tot7}
              ];
        }
        if (this.props.tipo=='porc'){
        for (var k = 0; k< polar1.length; ++k) {          
          polar1[k].F1=(polar1[k].F1/polar1[k].F2*100.0)
          polar1[k].F3=(polar1[k].F3/polar1[k].F2*100.0) 
          if (polar1[k].F3>100){polar1[k].F3=105}         
          if (polar1[k].F2==0){
            polar1[k].F2=0
          }else{
            polar1[k].F2=100.0
          }
         
        }
      }
        let  totasignaciones=r.tot1+r.tot2+r.tot3+r.tot4+r.tot5+r.tot6+r.tot7
        let  totcentros=r.m1+r.m2+r.m3+r.m4+r.m5+r.m6+r.m7
        let  totmeta=r.e1+r.e2+r.e3+r.e4+r.e5+r.e6+r.e7
        
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
          valueField={'F2'} name={totmeta+' Meta'}  width={1} color={'red'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
          <Series          
          valueField={'F3'} name={totasignaciones+' Tot Asig'}  width={1} color={'gray'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series          
          valueField={'F1'} name={totcentros+' O9D'}   width={1} color={'deepskyblue'}
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