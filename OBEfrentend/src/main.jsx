// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
//  import App from './App.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
    
//   </StrictMode>,
// )
// src/main.jsx
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Path from './Path.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ required

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ wrap App in router */}
      <Path />
    </BrowserRouter>
  </React.StrictMode>
);
