import React, { Component } from 'react';
import manual from '../images/manual1.png';
console.log(manual)
class CursoCard extends Component {    
    
    //state={
    //    persona:{nombre:'Luis',
    ///    centro:'caracas'}
   // }
   constructor(props) {
    super(props);
    this.state = { 
      flag:0,
     
      config:null };
  }
 
    render() {
        console.log("CursoCard")
        console.log({manual})
        return(
           // <li onMouseEnter={()=>this.props.mouseenter(this.props.persona)} >
           <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={manual} alt="" />
            <div className="card-body">
                <h4 className="card-title">{this.props.curso.titulo}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{"Introduccion a la Democracia"}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{this.props.curso.subtitulo}</p>
            </div>
            
        </div>
    </div>
        )    
     }
     
      
 }
export default CursoCard;

/*

import React from 'react';
//import PropTypes from 'prop-types';
//import StarRating from '../StarRating';
import manual from '../images/manual1.png';
const CursoCard = (props) => (
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={manual} alt="" />
            <div className="card-body">
                <h4 className="card-title">{this.props.
                    curso.titulo}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{"Introduccion a la Democracia"}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{"En este video podremos encontrar los primeros pasos a ser realizados en un evento electoral. bla bla bla"}</p>
            </div>
            
        </div>
    </div>
);

//MovieCard.defaultProps = {
//    movie: {}
//};

//MovieCard.propTypes = {
//    movie: PropTypes.object
//};

export default CursoCard;
*/