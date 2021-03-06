import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initialState from 'store/initial-state';
import createStore from 'store';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'containers/App/app.component';
import { Routes } from 'constants/routes';
import reportWebVitals from './reportWebVitals';

import 'index.scss';

const store = createStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={Routes.main}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
