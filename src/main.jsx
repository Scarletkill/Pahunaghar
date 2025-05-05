import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // For routing

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Using createRoot method
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
