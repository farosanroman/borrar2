import * as React from 'react';
import { Card } from 'reactstrap';
import {
  Chart,
  AreaSeries,
  Title,
} from '@devexpress/dx-react-chart-bootstrap4';

import { Scale } from '@devexpress/dx-react-chart';
//import { born as data } from '../../../demo-data/data-vizualization';
class ChartFaro extends React.Component {
//export default class ChartFaro extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data:[
        {ru:222,ch:333,us:234,year:"1"},
        {ru:222,ch:333,us:234,year:"2"},
        {ru:444,ch:555,us:66,year:"3"},
    ],
    };
  }

  render() {
    const {  data  } = this.state;
 console.log({data})
    return (
      <Card>
        <Chart
          data={data}
          width={650}
           height={500}
        >
       
          <AreaSeries
            valueField="ru"
            argumentField="year"
          />
          <AreaSeries
            valueField="ch"
            argumentField="year"
          />
          <AreaSeries
            valueField="us"
            argumentField="year"
          />
 <Title text={"PRUEBA:dx-react-chart"} />
          <Scale />
        </Chart>
      </Card>
    );
  }
}

export default ChartFaro;