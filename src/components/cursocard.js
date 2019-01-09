import React, { Component } from 'react';

import {Redirect} from 'react-router-dom'

class CursoCard extends Component { 
    constructor(props) {
    super(props);
    this.state = { 
      flag:0     
     };
     this.youtube = this.youtube.bind(this);
    }
    youtube2() {
       console.log("componentDidMount()")
       //console.log(this.state.flag)
       this.setState({flag:1});       
    }
    youtube() {
        this.setState(state => ({
          flag:1
        }));
      }
    
    render() {
        
        //console.log("PROPS")
        //console.log(this.state.flag)
        //console.log({manual})
        
        if (this.state.flag === 1) {
            return <Redirect to="/youtube"/>
        }
        return(
            
          
           <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={this.props.curso.url} alt="" />
            <div className="card-body">
                <h4 className="card-title">{this.props.curso.titulo}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{"Introduccion a la Democracia"}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{this.props.curso.subtitulo}</p>
              
            </div>   
            <button onClick={this.youtube}>Ver Contenido</button>         
        </div>
        <div>
       
      </div>
    </div>
        )    
     }
     
      
 }
export default CursoCard;
