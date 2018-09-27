import React, { Component } from 'react';
import MapGL,{Layer,Feature,Polygon,Popup} from 'react-mapbox-gl';
import {centros} from '../data/geojson.json';
//import Popup2 from './popup2';
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
const Map = MapGL({
  accessToken: TOKEN
});
let popupInfo0={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}
let centro=[-66.95286,7]
let zoom=[5]
console.log("map")
//console.log(this.props.popupinfo2props)
class Map2 extends Component {    
    //console.log({this.props.popupinfo2props})
    render() {
        let features=centros.map(cv=>{
            return(
               <Feature key={cv.id} properties={cv}  coordinates={cv.latlng} 
               onMouseEnter={this.props.onMouseEnter} onClick={this.props.onClick}/>
                 )
           } )
        console.log(features)
        return(
            <div className= "Map2">
            
        <Map        
          style={"mapbox://styles/mapbox/light-v9"}
          center={centro} 
          zoom={zoom}
          containerStyle={{height: "80vh",width: "80vw"}}

          >
           <Layer
             type="symbol"
             id="marker4"
             layout={{ "icon-image": "marker-15" }}>            
               {features}
          </Layer>
        
          </Map>
          </div>
        )    
     }
 }
export default Map2;