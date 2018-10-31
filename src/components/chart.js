import * as React from 'react';
import {Radar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import RadioGroup from 'devextreme-react/ui/radio-group'
import { Card } from 'reactstrap';
import {
  Chart as ChartR,  
  PieSeries as PieSeriesR
} from '@devexpress/dx-react-chart-bootstrap4';
import Chart , {
  ArgumentAxis,
  ArgumentAxisLabel,
  CommonSeriesSettings,
  Legend,
  Series,
  Tooltip,
  ValueAxis,
  ValueAxisConstantLine,
  ValueAxisConstantLineLabel,
  ValueAxisLabel
} from 'devextreme-react/ui/chart';
import { Scale } from '@devexpress/dx-react-chart';
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
const dataPie = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
const dataRadar = {
  labels: ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7'],
  datasets: [
    {
      label: 'Apertura',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'Votacion',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};
const dataArray = [
  { complaint: "Pizza is cold", count: 780 },
  { complaint: "Inadequate cheese quantity", count: 120 },
  { complaint: "Not baked properly", count: 52 },
  { complaint: "Delayed delivery", count: 1123 },
  { complaint: "Damaged delivery", count: 321 },
  { complaint: "Incorrect billing", count: 89 },
  { complaint: "Wrong size delivered", count: 222 }
];

    function customizePercentageText(info) {
      return `${info.valueText}%`;
    }
    const customizeTooltip = function(info) {
      return {
          html: `<div><div class="tooltip-header">${
              info.argumentText
              }</div><div class="tooltip-body"><div class="series-name">${
              info.points[0].seriesName 
              }: </div><div class="value-text">${
              info.points[0].valueText 
              }</div><div class="series-name">${
              info.points[1].seriesName 
              }: </div><div class="value-text">${
              info.points[1].valueText 
              }% </div></div></div>`
      };
    };
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
     
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
        <Pie data={dataPie} 
        width={50}
height={100}

        />
        
        <Radar data={dataRadar} 
         width={200}
height={300}
        />
        <Chart 
                title={'Comportamiento'}
                dataSource={dataArray}
                palette={'Harmony Light'}
                width={'100px'}
            >

                <ArgumentAxis>
                    <ArgumentAxisLabel overlappingBehavior={'stagger'} />
                </ArgumentAxis>

                <ValueAxis name={'frequency'} position={'left'} tickInterval={300} />
                <ValueAxis
                    name={'percentage'}
                    position={'right'}
                    tickInterval={2}
                    showZero={true}
                    valueMarginsEnabled={false}
                >
                    <ValueAxisLabel customizeText={customizePercentageText} />
                    <ValueAxisConstantLine value={80} width={2} color={'#fc3535'} dashStyle={'dash'}>
                        <ValueAxisConstantLineLabel visible={false} />
                    </ValueAxisConstantLine>
                </ValueAxis>

                <Series
                    name={'Complaints frequency'}
                    valueField={'count'}
                    axis={'frequency'}
                    type={'line'}
                    color={'#fac29a'}
                />
               

                <Tooltip
                    enabled={true}
                    shared={true}
                    
                />

                <Legend
                    verticalAlignment={'top'}
                    horizontalAlignment={'center'}
                />

                <CommonSeriesSettings argumentField={'complaint'} />
            </Chart>
        <Chart 
                title={'Resultados'}
                dataSource={dataArray}
                palette={'Harmony Light'}
                width={"100px"}
            >

                <ArgumentAxis>
                    <ArgumentAxisLabel overlappingBehavior={'stagger'} />
                </ArgumentAxis>

                <ValueAxis name={'frequency'} position={'left'} tickInterval={300} />
                <ValueAxis
                    name={'percentage'}
                    position={'right'}
                    tickInterval={2}
                    showZero={true}
                    valueMarginsEnabled={false}
                >
                    <ValueAxisLabel customizeText={customizePercentageText} />
                    <ValueAxisConstantLine value={80} width={2} color={'#fc3535'} dashStyle={'dash'}>
                        <ValueAxisConstantLineLabel visible={false} />
                    </ValueAxisConstantLine>
                </ValueAxis>

                <Series
                    name={'Complaints frequency'}
                    valueField={'count'}
                    axis={'frequency'}
                    type={'bar'}
                    color={'#fac29a'}
                />
                <Series
                    name={'Cumulative percentage'}
                    valueField={'cumulativePercentage'}
                    axis={'percentage'}
                    type={'spline'}
                    color={'#6b71c3'}
                />

                <Tooltip
                    enabled={true}
                    shared={true}
                    
                />

                <Legend
                    verticalAlignment={'top'}
                    horizontalAlignment={'center'}
                />

                <CommonSeriesSettings argumentField={'complaint'} />
            </Chart>
        <ChartR
          data={chartData9}
        >
          <PieSeriesR
            valueField="area"
            argumentField="country"
          />
          
          <Scale />
        </ChartR>
       
      </Card>
    );
  }
}