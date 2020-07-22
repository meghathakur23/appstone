import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/screens/Home'
import { Provider } from 'react-redux';

import store from './client/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
