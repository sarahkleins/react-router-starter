import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Main from './src/pages/main.js';
const history = createHistory();

const App = () => (
  <Router history={ history }>
    <div>
      <Route exact path='/' component={ Main } />
    </div>
  </Router>
);

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'));