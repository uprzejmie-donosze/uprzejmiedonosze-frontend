import React, {Component} from 'react';

import Icon from 'material-ui/svg-icons/action/open-in-new';

class Main extends Component {

    render() {
        return (
            <span className="link"><a href={this.props.to || this.props.path}>{this.props.children}</a>
                {
                    this.props.to ? <Icon/>: null
                }
            </span>
        );
    }
}

export default Main;
