import React, {Component} from 'react';
import AccordionItem from './accordionItem.component';

export default class Accordion extends Component {

    render() {
        return (
            <ul className="accordion">
              <AccordionItem />
              <AccordionItem />
            </ul>
        );
    }
}
