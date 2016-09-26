import React from 'react';

import { render } from 'react-dom';

//import css
import  css from './styles/style.styl';

//Import componetns
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//Import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from  'react-redux';
import store, { history } from './store';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postid" component={Single}></Route>
    </Route>
  </Router>
)
render(router, document.getElementById('root'));
