import React, { Component } from 'react';
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer} from 'react-mapbox-gl';


import styled  from 'styled-components';
import {coffe} from '../geo/coffe.json';
//alert(JSON.stringify(coffe))
//import svg from '../farocirculo.svg';
//import faro from '../images/farocirculo.svg';
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
const Map = MapGL({
  accessToken: TOKEN
});
//const popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}
//console.log('svg')
//console.log(svg)
//console.log('faro')
//console.log(faro)

let centro=[-66.813312,10.464872]
let zoom=[9]
 const circleLayout= MapGL.CircleLayout = { visibility: 'visible' };
const circlePaint= MapGL.CirclePaint = {
  'circle-color': 'black'
};
const symbolLayout= MapGL.SymbolLayout = {
  'text-field': '{place}',
  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  'text-offset': [0, 0.6],
  'text-anchor': 'top'
};
const symbolPaint= MapGL.SymbolPaint = {
  'text-color': 'black'
};
const layoutLayer = { 'icon-image': 'londonCycle' };
let image = new Image();
//image.src = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(svg2);
image.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAEJklEQVQ4T22UbUxbVRjH/6eU2zJa2gIbSMtaxtohMCgwMsEpRZRJlvFinBlkJMM4FJlkIhhnooMPxkwRSTTyIgQWX8KASBGdSogrEJBNCGwF/SAKCzImhVIKtPT29l7TC3uJ83w75zzn97yc5/8Q/M869fnvBhZsGgFn4DhOTzMcGBaTAkJMlAAD7SUHTf99Rh48ON06K6fdjlZCkMtxAM2wcNAeHNIEIFYlAe1mMfyHFXMrLqNILi8yFkXY7r6/BypomtYD6CYEGi/EvsUgSS1FVXYEb2u1rsJf7AvRLglmlzZw9oupOXlAQN7XxTGT3nse5I3ERTsmOHAaluPgoFlkxwfjzJNhaPtuGLWXByH0D4TAV4wwhRjd7+RhfYtBXt31OU24JqGtKMLGgwqapo0O2pMjFfsgNIDiU6rL16G87jJ+nl6GLv4wRLukfGS0m8Ga1YIfzxtQ2/ULhhZFbcaypCLiLayDdl99OjoQJQYl4KEBHwr9o1M419iPmMNPgSVCUD474QNY3/KgJC0EscEcCuvHodq7L50UNJqr7C72Qu9rcXjufAumbzvw6vFEdHZ1QRp3DHFR+xEXJkbnuAX+lACEELgYFskaCd58Vo2YM01ITEmrJic+M5sUEmFaY2EU9C/WIiY1C06nE26HDRJFCBoKtJBJfPDe93/jxvw6KKGAB6Xsk6I8U43m3lF8MyMcILmf3rB1l8bJhsfNKK3pQExGPu+VZQGZnxD1p0LgmZhDy+Zu9JlXIPYV8LVa3XAhXelCxYnHcLKmz0Y6xiy2rANiWWzhRSQ+ngF/RSg4joWH9TYhQecre8FOzqLWIsfojB1i3/utt7C8jh/eSEbP4M018tui0zQyei3tyzEbwiOjwXrcvMdNlwcl6SokKByQBAXDjxIh/d0rUKojAG+j7RT9ray9ELlXB0jvhKUqOQwXjn0whEhdFAjHwmvGckBSuB+yVVbcsaxi7M9lXPmLQKmN50Ecx+GOnca3ZXr0j0xUk9xPJgzdZ/VX5y12NAwuYtXJQeFPYWphE88nh+KIwsJ/v42hUP6VGSqNFrZNF4QCoDQjHJnRgThe2ZDOJ5z74aCx8qgqJ/XgthwAFocqelDz8jMI2ZrhZSEP2oMn3u7BT+/nQyUT3pNoxcftlz4qzz+9DWqdlW8tLUyu/TOvZpxr8DAMpKFqNJcdhXXmVyiCgqHV6pBU2oIjqSkI8dzG0ooVgzfnbsnkOr2pLm9bIjsy0UNAjISD2ru3ORi0Fz+KievDCAl9BDqdDpmVrZBHJoN2OQGGuUX5+eV2libcF+1dGD9GGEcbgBz7lgc9xfsxNHINYUoltFotXrrYgTXpAYhEoku+PuJzXrE+NEYenEsn680GihIaml/YbRgeM+uVPChisrq5zzS5scdkfD35ocH2L/6luCRndMPRAAAAAElFTkSuQmCC"
//console.log(image)
const images: any = ['londonCycle', image];
//console.log(image)
class FichaGeo extends Component {    
  constructor(props){
    super(props);    
    this.state={
      nodos:[],
      comentario:"comentario",      
      center:centro,
      zoom:zoom    
      
    }
    //this.onMapClick = this.onMapClick.bind(this)
    //this.onChangeEstrato=this.onChangeEstrato.bind(this)  
  }
  getColor(){
    const palette=['green','lightblue','deepskyblue',
    'dodgerblue','red','orange','purple','deeppink','orangered'
    ,'magenta','lime','goldenrod','brown','olive','gold','gray','fuchsia']
    var min = Math.ceil(17);
    var max = Math.floor(0);
    var pos= Math.floor(Math.random() * (max - min + 1)) + min;
    //var pos =Math.random() * (6 - 0) + 0; 
    //alert(pos)    
    return palette[pos]
}
getPolygonPaint = (color) => (MapGL.FillPaint = {
    'fill-color': color,
    'fill-opacity': 0.4
  });
getCirclePaint = (color) => ({
    'circle-radius': 4,
    'circle-color': color,
    'circle-opacity': 1.0
  });
    render() {
     
      //const { styleKey } = this.state;
    const {zoom,center } = this.state;
    //console.log({flagPopupTestigo})
         let sanroman=[{id:1,nombre:"San Roman"}]
         //var roman={id:1,nombre:"San Roman"}
        return(
        <div>
        <Map        
            
          style="mapbox://styles/mapbox/light-v9"
          center={center} 
          zoom={zoom}
          containerStyle={{height: "50vh",width: "50vw"}}        
          
        > 
         <Layer type="symbol" id="marker" layout={{ 'icon-image': 'londonCycle' }} images={images}>
          <Feature              
              key={sanroman[0]} 
              coordinates={[-69.999910,12.194860]}
            />
        </Layer>
        <Layer
        type="symbol"
        id="marker2"
        layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-66.95286,10]}/>
      </Layer>


        <GeoJSONLayer
          data={coffe}
          circleLayout={circleLayout}
          circlePaint={circlePaint}
         
          symbolLayout={symbolLayout}
          symbolPaint={symbolPaint}
        />
          <ZoomControl position={"bottomRight"} />
          </Map>

          
</div>
        )    
     }
 }
export default FichaGeo;

/*
 <Layer type="symbol" id="marker" layout={layoutLayer} images={images}>
          <Feature
              
              coordinates={[-66.95286,10]}
            />
        </Layer>
        */