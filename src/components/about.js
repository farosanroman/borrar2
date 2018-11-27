import React from 'react';
import {Card, CardBody, CardHeader, Media } from 'reactstrap';

//import { Link } from 'react-router-dom';
//import {leaderss} from '../data/productos.json';
function About(props) {
    
    return(
        <div className="container">
        
            <div className="row">
                
                <div className="col-12">
                    <h3>Quien Somos</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Nuestra Historia</h2>
                    <p>Faro comenzo a germinar en el anno 2005...</p>
                    <p>Luego con la aparicion de la Internet y los telefonos Nokia<em>Modelo xxx</em>,sucediron un conjunto de decisiones.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Arquitera</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Comienza el 27 de Octubre de 2018</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Esfuerzo de Voluntarios</dt>
                                <dd className="col-6">Basado en OpenSource</dd>
                                <dt className="col-6">50.000 Activistas de la Dmocracia</dt>
                                <dd className="col-6">20.000</dd>
                                <dt className="col-6">Formadores</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Que experiencia tan maravillosa.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Colaboradores del Desarrollo</h2>
                </div>
                <div className="col-12">
                    <Media list>
                      
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;