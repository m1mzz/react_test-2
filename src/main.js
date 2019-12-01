import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './store/reducers'
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import middleware from './store/middleware';

const store = createStore(reducers, applyMiddleware(middleware))

ReactDom.render(<Provider store={store}><App/></Provider>, document.querySelector('#app'));