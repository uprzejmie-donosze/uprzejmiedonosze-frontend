import 'whatwg-fetch';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

import App from './components/App';
import { store } from './store';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={{ useFirestoreForProfile: false, attachAuthIsReady: true }}
      dispatch={store.dispatch}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);
