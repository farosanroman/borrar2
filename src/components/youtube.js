import React, { Component } from "react";
import { Jumbotron }  from 'reactstrap';
import ReactPlayer from 'react-player'

class YouTube extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          flag:0,          
          config:null };
      }
  render() {
 
    return(
        <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=iYTSBK3HOaY&t=565s' playing />
        <Jumbotron>
           <div  dark className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Instrucciones de Uso</h1>
                       <p>Una vez registrado podra...</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
        </div>
    );
  }
}

export default YouTube;