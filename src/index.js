import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom'
import './index.css';
import App from './App';
// 리덕스 관련
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import { history } from "./redux/configureStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);