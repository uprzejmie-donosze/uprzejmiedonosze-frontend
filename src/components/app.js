import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import theme from '../theme';
import interceptor from '../interceptor';

injectTapEventPlugin();
interceptor();

class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <AppBar title="Uprzejmie donoszę"/>
                    <div className="mainContainer">
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
