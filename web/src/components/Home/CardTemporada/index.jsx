import React, { Component } from 'react';

import './index.css';

class CardTemporada extends Component {

    addHover = this.props.mouseHover;
    removeHover = this.props.noMouseHover;
    render() {
        return (
            <div className="col-md-3 temporadas">
                <div className="card">
                    <img src={this.props.img} class="card-img-top" alt={this.props.titulo} onMouseEnter={e => { this.addHover(this.props.id) }} onMouseLeave={e => this.removeHover(this.props.id)}></img>
                    <div id={this.props.id} className="card-info">
                        <div id="card-name">
                            <h2>{this.props.titulo}</h2>
                        </div>
                        <div id="card-info">
                            <h5>Clique para saber mais</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTemporada;