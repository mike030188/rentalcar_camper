import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MotorComponents from './components/pages/MotorComponents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route/>
      </Routes>
    </BrowserRouter>
    <React.StrictMode>
      <MotorComponents/>    
    </React.StrictMode>
  </>
);
