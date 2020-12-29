import React, { Component } from 'react';

import './index.css';

class CardPersonagem extends Component {
    render() {
        return (
            <div className="col-md-4 text-center mb-4 pb-4 info-personagem" data-aos={this.props.fade}>
                <div className="img-personagem">
                    <img src={this.props.img} alt="" />
                    <p className="nome-personagem">{this.props.nome}</p>
                </div>
            </div>
        )
    }
}

export default CardPersonagem;