import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//redux 
import { Provider } from 'react-redux'
import store, { Persistor } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

