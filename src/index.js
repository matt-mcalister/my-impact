import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';

// import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'



import { Provider } from 'react-redux'

import { configureStore, history } from './store/configureStore'


const store = configureStore()


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
