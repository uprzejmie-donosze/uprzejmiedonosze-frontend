import React, {Component} from 'react';

class Card extends Component {

    render() {
        return (
            <div className='card'>
                <img className='card__icon' src={this.props.icon}/>
                <h3 className='card__title'>{this.props.title}</h3>
                <p className='card__text'>{this.props.text}</p>
            </div>
        );
    }
}

export default Card;
