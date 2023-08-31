import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CarInfo from './components/pages/CarInfo';
import CartComp from './components/pages/Cart';
import CampingPlaceComp from './components/pages/CampingPlace';
import MainComp from './components/pages/Main';
import TestComp from './components/pages/TestComp';
import FooterComp from './components/footer/Footer';
import NavbarComp from './components/navbar/Navbar';
import CampingLocationComp from './components/pages/CampingLocation';
import TestCompCaravan from './components/pages/caravan/TestCompCaravan';
import SignInComp from './components/auth/SignIn';
import RegistrateComp from './components/auth/Registrate';
import PopupApp from './components/popup/PopupTest';


function App() {
  return(
    <BrowserRouter>
      <MainApp/>
    </BrowserRouter>
  )
}

function MainApp() {

const tolocate = useLocation();
const signInPage = tolocate.pathname === "/signin";
const registrPage = tolocate.pathname === "/registrate";


  return (
    <React.Fragment>
      {!signInPage && !registrPage && <NavbarComp/> }
      
        <Routes>
          <Route path="/" element={<MainComp/>}/>
          <Route path="/carinfo/:id" element={<CarInfo/>} />
          <Route path="/signin" element={<SignInComp/>}/>
          <Route path="/registrate" element={<RegistrateComp/>}/>
          <Route path="/motor" element={<TestComp/>} />
          <Route path="/caravan" element={<TestCompCaravan/>} />
          <Route path="/cart" element={<CartComp/>} />
          <Route path="/campingplaces" element={<CampingPlaceComp/>} />
          <Route path="/campinglocation" element={<CampingLocationComp/>} />

          {/* <Route path="/popup" element={<PopupComp/>} /> */}
          <Route path="/popuptest" element={<PopupApp/>} />

        </Routes>

      {!signInPage && !registrPage &&  <FooterComp/>}

    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
