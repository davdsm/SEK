import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from './i18n/LocaleContext.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
