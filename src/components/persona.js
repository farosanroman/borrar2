import React, { Component } from 'react';

class Persona extends Component {    
    
    //state={
    //    persona:{nombre:'Luis',
    ///    centro:'caracas'}
   // }
    render() {
        //console.log({this.props.nombre})
        return(
           // <li onMouseEnter={()=>this.props.mouseenter(this.props.persona)} >
           <li  >
           
           <span 
           //onClick={this.props.onMouseEnter}
           style={{fontSize:'15px',fontWeight:'normal',align:'left'}}>
           {this.props.persona.nombre1} {this.props.persona.apellido1}
           </span>
        
          </li>
        )    
     }
     handleRemove = (id) => () => {
        console.log(id)
        //<li onMouseEnter={this.props.mouseenter()} >
        //this.setState({heading:"e.feature.properties.nombre"})
        //const TopMostParent = ReactDOM.render(<App />, document.getElementById('root'));

    // Update state of topmost parent when this method is called 
       //window.updateTopMostParent("someValue");
    //TopMostParent.setState({ heading:"e.feature.properties.nombre" }); 

      }
      
 }
export default Persona;
//<span onMouseEnter={this.props.onMouseEnter} style={{fontSize:'15px',fontWeight:'normal',align:'left'}}>{this.props.persona.nombre1} {this.props.persona.apellido1}</span>
        
//https://blog.cloudboost.io/updating-state-of-a-parentless-component-in-react-e6b43047c91e


 // Store reference of topmost parent component
