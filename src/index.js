import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import About from './components/About';
import * as serviceWorker from './serviceWorker';
import store from './store.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './containers/Navbar.js';

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
