import React, { Component }  from 'react';

import Chart, {
  CommonSeriesSettings,
  ValueAxis,
  Label,
  Legend,
  Series,
  Tooltip,Size
} from 'devextreme-react/chart';
import PieChart, {
    SeriesPie ,
    LabelPie ,
    Connector,
    SizePie,
    Export,LegendPie
  } from 'devextreme-react/pie-chart';
const dataSource = [ {
    age: '15-19',
    male: 0,
    female:0
  }, {
    age: '20-24',
    male: 0,
    female:0
  }, {
    age: '25-29',
    male: 0,
    female:0
  }, {
    age: '30-34',
    male: 0,
    female:0
  }, {
    age: '35-39',
    male: 0,
    female:0
  }, {
    age: '40-44',
    male: 0,
    female:0
  }, {
    age: '45-49',
    male: 0,
    female:0
  }, {
    age: '50-54',
    male: 0,
    female:0
  }, {
    age: '55-59',
    male: 0,
    female:0
  }, {
    age: '60-64',
    male: 0,
    female:0
  }, {
    age: '65-69',
    male: 0,
    female:0
  }, {
    age: '70-74',
    male: 0,
    female:0
  }, {
    age: '75-79',
    male: 0,
    female:0
  }, {
    age: '80+',
    male: 0,
    female:0
  }, ];
  class Piramide extends Component {    
    constructor(props) {
        super(props);
        this.state = { 
            defensores:props.defensores,
            error:null,
            isLoading: false,          
            config:null 
        };
      }
  render() {
    const {defensores,error,isLoading } = this.state;
    
    //alert(JSON.stringify(defensores))
    var AD=0,PJ=0,VP=0,UNT=0,SUMATE=0,OTRO=0
    for (var i = 0; i< defensores.length; ++i) {
        var val= defensores[i].edad
        var sexo=defensores[i].sexo
        switch (true) {
            case (  val <= 19):
            if (sexo>0){
                dataSource[0].female+=1
            }else{
                dataSource[0].male-=1
            }
            break;
            case (19 < val &&  val <=24):
            if (sexo>0){
                dataSource[1].female+=1
            }else{
                dataSource[1].male-=1
            }
            break;
            case (24 < val &&  val <=29):
            if (sexo>0){
                dataSource[2].female+=1
            }else{
                dataSource[2].male-=1
            }
            break;
            case (29 < val &&  val <=34):
            if (sexo>0){
                dataSource[3].female+=1
            }else{
                dataSource[3].male-=1
            }
            break;
            case (34 < val &&  val <=39):
            if (sexo>0){
                dataSource[4].female+=1
            }else{
                dataSource[4].male-=1
            }
            break;
            case (39 < val &&  val <=44):
            if (sexo>0){
                dataSource[5].female+=1
            }else{
                dataSource[5].male-=1
            }
            break;
            case (44 < val &&  val <=49):
            if (sexo>0){
                dataSource[6].female+=1
            }else{
                dataSource[6].male-=1
            }
            break;
            case (49 < val &&  val <=54):
            if (sexo>0){
                dataSource[7].female+=1
            }else{
                dataSource[7].male-=1
            }
            break;
            case (54 < val &&  val <=59):
            if (sexo>0){
                dataSource[8].female+=1
            }else{
                dataSource[8].male-=1
            }
            break;
            case (59 < val &&  val <=64):
            if (sexo>0){
                dataSource[9].female+=1
            }else{
                dataSource[9].male-=1
            }
            break;
            case (64 < val &&  val <=69):
            if (sexo>0){
                dataSource[10].female+=1
            }else{
                dataSource[10].male-=1
            }
            break;
            case (69 < val &&  val <=74):
            if (sexo>0){
                dataSource[11].female+=1
            }else{
                dataSource[11].male-=1
            }
            break;
            case (74 < val &&  val <=79):
            if (sexo>0){
                dataSource[12].female+=1
            }else{
                dataSource[12].male-=1
            }
            break;
            case (79 < val ):
            if (sexo>0){
                dataSource[13].female+=1
            }else{
                dataSource[13].male-=1
            }
            break;
            
        }
        OTRO+=1
            if (defensores[i].orientacion=="AD"){
                AD+=1
                OTRO-=1
            }
            if (defensores[i].orientacion=="PJ"){
                PJ+=1
                OTRO-=1
            }
            if (defensores[i].orientacion=="VP"){
                VP+=1
                OTRO-=1
            }
            if (defensores[i].orientacion=="UNT"){
                UNT+=1
                OTRO-=1
            }
            if (defensores[i].orientacion=="SUMATE"){
                SUMATE+=1
                OTRO-=1
            }
    }
    var tot=defensores.length;
    var partidos=[];
    partidos.push({porc:((AD*1.0)/(tot*1.0)*100.0).toFixed(2),respuesta:"AD"})
    partidos.push({porc:((VP*1.0)/(tot*1.0)*100.0).toFixed(2),respuesta:"VP"})
    partidos.push({porc:((PJ*1.0)/(tot*1.0)*100.0).toFixed(2),respuesta:"PJ"})
    partidos.push({porc:((UNT*1.0)/(tot*1.0)*100.0).toFixed(2),respuesta:"UNT"})
    partidos.push({porc:((SUMATE*1.0)/(tot*1.0)*100.0).toFixed(2),respuesta:"SUMATE"})
    partidos.push({porc:((OTRO*1.0)/(tot*1.0)*100.0).toFixed(2),respuesta:"OTRO"})
    
    return (
        <div>
            <div className="row ">
    <div className="d-flex flex-row">                    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
        <div className="card-deck">
      <Chart
        title={'Piramide Poblacional de O9D'}
        dataSource={dataSource}
        id={'chart'}
        rotated={true}
        barGroupWidth={18}
      >
        <CommonSeriesSettings
          type={'stackedbar'}
          argumentField={'age'}
        />
        <Series
          valueField={'male'}
          name={'Hombres'}
          color={'#3F7FBF'}
        />
        <Series
          valueField={'female'}
          name={'Mujeres'}
          color={'#F87CCC'}
        />
        <Tooltip
          enabled={true}
          customizeTooltip={this.customizeTooltip}
        />
        <ValueAxis>
          <Label customizeText={this.customizeLabel} />
        </ValueAxis>
        <Legend
          verticalAlignment={'bottom'}
          horizontalAlignment={'center'}
          margin={{ left: 50 }}
        />
      <Size width={550} height={580} />
      </Chart>

<PieChart
        id={'resultados'}
        dataSource={partidos}
        palette={['lightgray','orange', 'gold', 'navy', '	Crimson', '	DeepSkyBlue', '#87CEFA', '#BDBDBD']}
        title={'Partidos'}
       
      >
      <Series argumentField={'respuesta'} valueField={'porc'} >
         <Label visible={true}>  <Connector visible={true} width={1} /> </Label>
      </Series>
        <Size width={550} height={550} />
        <Export enabled={false} />
        <Legend
            verticalAlignment={'bottom'}
            horizontalAlignment={'center'}
            itemTextPosition={'bottom'}
            visible={true}
          />
      </PieChart>
      </div></div>
  
  </div>
 </div>   
</div>

    );
  }

  customizeTooltip(e) {
    return { text: Math.abs(e.valueText) };
  }

  customizeLabel(e) {
    return `${Math.abs(e.value)}%`;
  }
}

export default Piramide;