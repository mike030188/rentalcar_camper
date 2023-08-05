import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MotorComponents from './components/pages/MotorComponents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarInfo from './components/pages/CarInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarInfo/>} />
        <Route path="/motorcomponents" element={<MotorComponents/>} />
      </Routes>
    </BrowserRouter>
    
  
);
