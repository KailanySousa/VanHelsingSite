import React, { Component } from 'react';

import './index.css';

class CardTemporada extends Component {

    addHover = this.props.mouseHover;
    removeHover = this.props.noMouseHover;
    render() {
        return (
            <div className="col-md-3 temporadas" id={this.props.id}>
                <div className="card">
                    <img src={this.props.img} class="card-img-top hover-zoom" alt={this.props.titulo} onMouseEnter={e => { this.addHover(this.props.id) }} onMouseLeave={e => this.removeHover(this.props.id)}></img>
                </div>
            </div>
        )
    }
}

export default CardTemporada;