import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './assets/stylesheet/base.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/check-np">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
