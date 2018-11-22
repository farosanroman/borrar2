import React, { Component } from 'react';
import {Popup} from 'react-mapbox-gl';
//import styled ,{csc} from 'styled-components';
class MapPopupTestigos extends Component {
constructor(props) {
  super(props);
  this.state = { 
    identificacion:"v3333333333",
    Ppopupnodoinfo:this.props.popupnodoinfo ,
    popupinfo:this.props.popupnodoinfo,
    flagPopup:false ,
    flagPopupTestigo:this.props.flagPopupTestigo
   };
  }
  componentDidMount() {
   //this.state.Ppopupnodoinfo=this.props.popupnodoinfo
  }
  onSubmit = (e) => {
    e.preventDefault();
     console.log(e)
     var cedula=this.props.popupnodoinfo.cedula
     window.open('https://polidata.azurewebsites.net/#observacion?cedula='+cedula+'&f=A1', '_blank', 'location=yes,height=470,width=580,scrollbars=yes,status=yes');
  
    }
  
  closePopup = (e) => {
    // this.state.Ppopupnodoinfo={"coordinates":[0,0],"nombre":"oJo","error":"sin error"}
    
   
    //console.log("closePopup")
    //console.log(e)
     this.props.functionclose()
     e.preventDefault();
   
    }
  
  render() {
   // console.log("RENDER MapPopUpTestigo")
   // console.log(this.props.flagPopupTestigo)
   //console.log("Popiuppppp")
    const {Ppopupnodoinfo}= this.state
    console.log({Ppopupnodoinfo})
    const popupnodoinfo=this.props.popupnodoinfo
    //const {popupnodoinfo } = this.state;
    
    let coor=this.props.popupnodoinfo.coordinates;
    if (this.props.flagPopupTestigo===false)coor=[0,0]
      //const popupinfo=this.props.popupnodoinfo   
      return (
      <div className= "Popup">
         <Popup       
        key={1}
        coordinates={coor}
        offset={{'bottom-left': [0, -0],  'bottom': [0, -1], 'bottom-right': [-0, -1]}}
                
     >
    <form onSubmit={this.onSubmit}>
     <h6>{popupnodoinfo.idcentro}{'-'}{popupnodoinfo.cedula}</h6>
     <h6>{popupnodoinfo.centro}</h6>
     <h6>{popupnodoinfo.nombre}</h6>
     <h6>{popupnodoinfo.celular}{' '} {popupnodoinfo.correo} </h6>
    
     <input style={{backgroundColor:'orange'}} type="submit" value="Polidata" />
     <input type="button"  onClick={this.closePopup} value="X" />
  
     </form>
     </Popup>
     
   </div>
       )
      
  }
}
export default MapPopupTestigos;