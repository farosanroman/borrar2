import * as React from 'react';
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
  ValueAxisLabel
} from 'devextreme-react/chart';
import PieChart, {
  Series as SeriesPie,
  Label as LabelPie,
  Connector,
  Size,
  Export
} from 'devextreme-react/pie-chart';
import PolarChart, {
  Series as SeriesPolar,
  Label as LabelPolar,
  Connector as ConnectorPolar,
  Size as SizePolar,
  Export as ExportPolar
} from 'devextreme-react/polar-chart';
import {polardata,areas,populationData} from '../data/complainData.json';

import RadioGroup from 'devextreme-react/ui/radio-group'
import { Card } from 'reactstrap';

import { Scale } from '@devexpress/dx-react-chart';

	




    function customizePercentageText(info) {
      return `${info.valueText}%`;
    }
    
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
     
      
    };
  }
  
  render() {  
    const { data2: chartData2, data9:chartData9 } = this.state;
  
    return (
      <Card>
        <PolarChart
        id={'pie'}
        dataSource={polardata}
        useSpiderWeb={true}
        commonSeriesSettings= {{type: "line"}}
        palette={'Bright'}
        title={'Area of Countries'}
        tooltip= {{
          enabled: true
        }
      }
      >
        <Series
          
          valueField={'apples'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series
          
          valueField={'grapes'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series
          
          valueField={'lemons'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Series
          
          valueField={'oranges'}
        >

          <Label visible={false}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Size width={500} />
        <Export enabled={true} />
      </PolarChart>
            <Chart
        title={'World Population by Decade'}
        dataSource={populationData}
        id={'chart'}
      >

        <ArgumentAxis tickInterval={10}>
          <Label format={'decimal'} />
        </ArgumentAxis>

        <Series
          type={'bar'}
        />

        <Legend
          visible={false}
        />

      </Chart>

<PieChart
        id={'pie'}
        dataSource={areas}
        palette={'Bright'}
        title={'Area of Countries'}
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
        <Series
          argumentField={'country'}
          valueField={'area'}
        >
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>

       
       
        
       
      </Card>
    );
  }
}