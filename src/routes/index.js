import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './../components/app';
import Main from './../components/main';

import {
    onAppEnter
} from './routesCallbacks';

export default (
    <Route path="/" onEnter={onAppEnter} component={App}>
        <IndexRoute component={Main}/>
    </Route>
);
