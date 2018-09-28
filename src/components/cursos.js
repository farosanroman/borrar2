import React, { Component } from 'react';
import {cursos} from '../data/cursos.json';
import CursoCard from '../components/cursocard'
console.log(cursos)
class Cursos extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Movie Cards',
            movies:[]
        };
    }
    componentDidMount() {
        console.log("componentDidMount()")
        //this.setState(() => ({ movies: MovieService.getMovies() }));
    }
// // <MovieList movies={this.state.movies} />
    render() {
        const cursosreact=cursos.map(cur=>{
            return(
                
               <CursoCard key={cur.key} curso={cur}  ></CursoCard>
                 )
           } )
        console.log(cursosreact)
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                    <div className="card-deck">
                    {cursosreact}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cursos;