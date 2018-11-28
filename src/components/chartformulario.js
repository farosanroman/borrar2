import React, { Component } from 'react';
  import PolarChart, {
    Series ,
    Label ,
    Connector ,
    Size ,
    Export ,Legend,Title,Subtitle
  } from 'devextreme-react/polar-chart';
  import {estados} from '../data/tablas.json';
  class ChartFormulario extends Component {
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
    console.log(r)
    let ww='400';
    var polar1=[
        { "arg": "E1","F2": r.e1,"F1":r.d11,"F2":r.d21,"F3":r.d31},
              { "arg": "E2","F0": r.e2,"F1":r.d12,"F2":r.d22,"F3":r.d32},
              { "arg": "E3","F0": r.e3,"F1":r.d13,"F2":r.d23,"F3":r.d33},
              { "arg": "E4","F0": r.e4,"F1":r.d14,"F2":r.d24,"F3":r.d34},
              { "arg": "E5","F0": r.e5,"F1":r.d15,"F2":r.d25,"F3":r.d35},
              { "arg": "E6","F0": r.e6,"F1":r.d16,"F2":r.d26,"F3":r.d36},
              { "arg": "E7","F0": r.e7,"F1":r.d17,"F2":r.d27,"F3":r.d37}
        ];
        const estado=estados[idestado].name
        
        if (idestado===0){
            ww='400'
            polar1=[
              { "arg": "E1","F2": r.e1,"F1":r.d11,"F2":r.d21},
              { "arg": "E2","F2": r.e2,"F1":r.d12,"F3":r.d22},
              { "arg": "E3","F2": r.e3,"F1":r.d13,"F3":r.d23},
              { "arg": "E4","F2": r.e4,"F1":r.d14,"F3":r.d24},
              { "arg": "E5","F2": r.e5,"F1":r.d15,"F3":r.d25},
              { "arg": "E6","F2": r.e6,"F1":r.d16,"F3":r.d26},
              { "arg": "E7","F2": r.e7,"F1":r.d17,"F3":r.d27}
              ];
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
          valueField={'F1'} name={totcentros+' D1'}   width={1} color={'orange'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
       
        <Series          
          valueField={'F2'} name={totasignaciones+' D2'}  width={1} color={'dodgerblue'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series          
          valueField={'F3'} name={totasignaciones+' D3'}  width={1} color={'limegreen'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series          
          valueField={'F0'} name={totmeta+' Meta'}  width={1} color={'red'}
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

export default ChartFormulario;