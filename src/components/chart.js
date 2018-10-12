import * as React from 'react';
import { Card } from 'reactstrap';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  ArgumentGrid,
  BarSeries,
  LineSeries,
  Legend,
  PieSeries
} from '@devexpress/dx-react-chart-bootstrap4';
import { Scale } from '@devexpress/dx-react-chart';
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data2: [
        { month: 'Jan', sale: 50, total: 987 },
        { month: 'Feb', sale: 100, total: 3000 },
        { month: 'March', sale: 30, total: 1100 },
        { month: 'April', sale: 107, total: 7100 },
        { month: 'May', sale: 95, total: 4300 },
        { month: 'June', sale: 1150, total: 7500 },
      ],
      data9: [
        { country: 'Russia', area: 12 },
        { country: 'Canada', area: 7 },
        { country: 'USA', area: 7 },
        { country: 'China', area: 7 },
        { country: 'Brazil', area: 6 },
        { country: 'Australia', area: 5 },
        { country: 'India', area: 2 },
        { country: 'Others', area: 55 },
      ]
    };
  }

  render() {
    const { data2: chartData2, data9:chartData9 } = this.state;

    return (
      <Card>
        
        <Chart
          data={chartData9}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          
          <Scale />
        </Chart>
       
      </Card>
    );
  }
}