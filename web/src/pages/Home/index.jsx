import React, { Component } from 'react';
import AOS from 'aos'

import temporada1 from '../../images/temporada_1.jpg';
import temporada2 from '../../images/temporada_2.jpg';
import temporada3 from '../../images/temporada_3.jpg';
import temporada4 from '../../images/temporada_4.jpg';

import './index.css';
import CardTemporada from '../../components/Home/CardTemporada';

AOS.init()
class Home extends Component {

    addHover = (id) => {
        console.log("add_", id);
    }

    removeHover = (id) => {
        console.log("remove_", id);
    }

    render() {
        return (
            <div>
                <div className="container-fluid box bg-inicial" data-aos="fade-down"></div>
                <div className="container-fluid box bg-black">
                    <div className="row p-4 row-height">
                        <div className="col-md-6 sobre-imagem" data-aos="fade-right">
                        </div>

                        <div className="col-md-6">
                            <div className="card" data-aos="fade-down">
                                <div className="card-body">
                                    <div className="row" id="row-info">
                                        <h5 className="card-title col-md-3">Van Helsing</h5>
                                        <div className="col-md-2 p-0 text-center"> <span className="border-bottom-black">2016</span></div>
                                        <div className="col-md-1 p-0"><p id="a-18">+18</p></div>
                                        <div className="col-md-3 p-0"><span className="border-bottom-black">4 temporadas</span></div>
                                        <div className="col-md-3 p-0"><span className="border-bottom-black">Neil LaBute</span></div>

                                    </div>
                                    <p className="card-text">Quando vemos o nome "Van Helsing" lembramos do protagonista do filme "Van Helsing - Caçador de Monstros" lançado em 2004, estrelado por Hugh Jackman. Mas dessa vez não estamos dele, mas sim da sua bisneta, Vanessa Helsing!</p>
                                </div>

                            </div>

                            <div className="card mt-1" data-aos="fade-left">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-title">
                                                <strong className="border-bottom-black"> Elenco</strong>
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="card-text">Kelly Overton, Jonathan Scarfe, Rukiya Bernard, Trezzo Mahoro, Christopher Heyerdahl, Vicent Gale, Aleks Paunovic</p>
                                        </div>
                                        <div className="col-md-12 offset-md-9">
                                            <button type="button" className="btn btn-padrao mt-2"> Ver Mais</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-1" data-aos="fade-up">

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="card-title">
                                                <strong className="border-bottom-black"> Sinopse</strong>
                                            </p>
                                        </div>
                                        <div className="col-md-12">

                                            <p className="card-text">Depois de três anos em coma, Vanessa desperta em um mundo devastado pelos vampiros. Agora, ela e um bando de sobreviventes precisam lutar para permanecerem vivos.</p>

                                        </div>
                                        <div className="col-md-12 offset-md-9">
                                            <button type="button" className="btn btn-padrao mt-2"> Ver Mais</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid box bg-temporadas p-0" data-aos="fade-right">
                    <div id="bg-temporadas-opacity"></div>

                    <div className="container">
                        <div className="row mt-4 d-flex justify-content-center">
                            <CardTemporada titulo="1º Temporada" img={temporada1} id="img-1" mouseHover={this.addHover} noMouseHover={this.removeHover} />
                            <CardTemporada titulo="2º Temporada" img={temporada2} id="img-2" mouseHover={this.addHover} noMouseHover={this.removeHover} />
                            <CardTemporada titulo="3º Temporada" img={temporada3} id="img-3" mouseHover={this.addHover} noMouseHover={this.removeHover} />
                            <CardTemporada titulo="4º Temporada" img={temporada4} id="img-4" mouseHover={this.addHover} noMouseHover={this.removeHover} />

                        </div>
                    </div>
                </div>
                <div className="container-fluid box bg-black"></div>
            </div>
        )
    }
}

export default Home;