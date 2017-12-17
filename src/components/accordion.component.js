import React, {Component} from 'react';
import AccordionItem from './accordionItem.component';

export default class Accordion extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: this.props.data
        };
    }

    render() {
        return (
            <ul className="accordion">
                {this.state.items.map(item => <AccordionItem {...item} key={item.key}/>)}
            </ul>
        );
    }
}
