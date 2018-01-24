import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(rootReducer, defaultState, enhancer);

export const history = syncHistoryWithStore(browserHistory, store)

export default store;
