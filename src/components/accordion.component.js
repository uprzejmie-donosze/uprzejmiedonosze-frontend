import React, {Component} from 'react';

export default class Accordion extends Component {

    toggleAccordionItem(event) {
        event.target.classList.toggle('accordion__item--active');
    }

    render() {
        return (
            <ul className="accordion">
              <li className="accordion__item" onClick = { (event) => this.toggleAccordionItem(event) } >
                <div className="accordion__header">
                  <h4 className="accordion__title">Przykładowe pytanie</h4>

                  <button type="button" className="accordion__button">
                    <span className="accordion__arrow"></span>
                  </button>
                </div>
                <div className="accordion__body">
                  <p className="accordion__content">Przykładowa odpowiedź</p>
                </div>
              </li>

              <li className="accordion__item">
                <div className="accordion__header">
                  <h4 className="accordion__title">Przykładowe pytanie</h4>

                  <button type="button" className="accordion__button">
                    <span className="accordion__arrow"></span>
                  </button>
                </div>
                <div className="accordion__body">
                  <p className="accordion__content">Przykładowa odpowiedź</p>
                </div>
              </li>
            </ul>
        );
    }
}