import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import App from './common/App';

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
    );
  });
};
