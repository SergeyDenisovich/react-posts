import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { postsReducer } from './reducer/postsReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(postsReducer, composeEnhancers(applyMiddleware(thunk)));
