import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarInfo from './components/pages/CarInfo';
import CartComp from './components/pages/Cart';
import CampingPlaceComp from './components/pages/CampingPlace';
import MainComp from './components/pages/Main';
import TestComp from './components/pages/TestComp';
import FooterComp from './components/footer/Footer';
import NavbarComp from './components/navbar/Navbar';
import CampingLocationComp from './components/pages/CampingLocation';
import TestCompCaravan from './components/pages/caravan/TestCompCaravan';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <NavbarComp/>
        <Routes>
          <Route path="/" element={<MainComp/>}/>
          <Route path="/carinfo/:id" element={<CarInfo/>} />
          <Route path="/motor" element={<TestComp/>} />
          <Route path="/caravan" element={<TestCompCaravan/>} />

          
          <Route path="/cart" element={<CartComp/>} />
          <Route path="/campingplaces" element={<CampingPlaceComp/>} />
          <Route path="/campinglocation" element={<CampingLocationComp/>} />
        </Routes>
        <FooterComp/>     
    </BrowserRouter> 
);
