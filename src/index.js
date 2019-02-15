import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig';
import App from './components/App';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
    reduxFirestore(firebaseConfig) // redux bindings for firestore
  )
);

render( <Provider store={store}><App /></Provider>, document.getElementById('app'));
