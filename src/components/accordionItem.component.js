import React, {Component} from 'react';

class AccordionItem extends Component {
    constructor(){
        super();
        this.state = {
            isOpen: false
        };
    }

    toggleAccordionItem = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <li
              className={`accordionItem ${this.state.isOpen ? 'accordionItem--open' : ''}`} 
              onClick={this.toggleAccordionItem}
            >
              <div className="accordionItem__header">
                <h4 className="accordionItem__title">Przykładowe pytanie</h4>

                <button type="button" className="accordionItem__button">
                  <span className="accordionItem__arrow"></span>
                </button>
              </div>

              <div
                className="accordionItem__body"
                style={{ height: `${this.state.isOpen && this.refs.content ? this.refs.content.clientHeight : 0}px` }}
              >
                <p className="accordionItem__content" ref='content'>Przykładowa odpowiedź</p>
              </div>
            </li>
        );
    }
}

export default AccordionItem;