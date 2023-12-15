import { createStore, applyMiddleware, compose } from 'redux';
import { withExtraArgument } from 'redux-thunk';
import { ExtendedFirebaseInstance, getFirebase } from 'react-redux-firebase';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import rootReducer from './rootReducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(withExtraArgument({ getFirebase })),
  )
);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type StoreExtraArgs = {
  getFirebase: () => ExtendedFirebaseInstance;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;