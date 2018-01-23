import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import css from './styles/style.styl';

import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import store, { history } from './store';

const router = (
  // <Provider /> exposes the store to the application
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:photoId" component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(
  router,
  document.getElementById('root')
);
