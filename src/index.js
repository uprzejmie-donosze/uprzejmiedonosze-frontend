import 'whatwg-fetch';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { withExtraArgument } from 'redux-thunk';
import {  getFirestore, createFirestoreInstance } from 'redux-firestore';
import {  getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import App from './components/App';
import rootReducer from './store/reducers/rootReducer';
import { firebaseConfig } from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(withExtraArgument({ getFirebase, getFirestore })),
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={{ userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);
