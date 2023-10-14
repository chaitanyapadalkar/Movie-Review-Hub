import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-oheyfkby4x1odetr.us.auth0.com"
        clientId="oiTPJOfewgwTbymF82YDhdTy1kUTYYV0"
        redirectUri={window.location.origin}
      >
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
