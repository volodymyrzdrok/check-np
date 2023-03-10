import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './assets/stylesheet/_base.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/check-np">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
