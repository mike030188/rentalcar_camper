import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MotorComponents from './components/pages/MotorComponents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarInfo from './components/pages/CarInfo';
import CartComp from './components/pages/Cart';
import CampingPlaceComp from './components/pages/CampingPlace';
import MainComp from './components/pages/Main';
import TestComp from './components/pages/TestComp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainComp/>}/>
      <Route path="/motor" element={<TestComp/>} />
      <Route path="/carinfo/:id" element={<CarInfo/>} />
      <Route path="/cart" element={<CartComp/>} />
      <Route path="/campingplaces" element={<CampingPlaceComp/>} />
      </Routes>
    </BrowserRouter> 
);
