import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Foot from './foot.component';

import theme from '../theme';
import interceptor from '../interceptor';

injectTapEventPlugin();
interceptor();

class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    {this.props.children}
                    <Foot/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
