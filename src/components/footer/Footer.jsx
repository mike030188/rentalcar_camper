import React from 'react';
import { FooterWrapper, Icons } from './Footer.style';
import { Text } from '../navbar/Navbar.style';
import { FaInstagram, FaNeos, FaYoutube } from 'react-icons/fa';

const FooterComp = () => {
  return (
    <FooterWrapper>
      <Text style={{color:'#FFF', fontWeight:'bold', marginTop:'48px'}}>Camper</Text>
      <div>
        <h3>Services</h3>
        <p>Camping</p>
        <p>Lodging</p>
        <p>Harbor</p>
        <p>Day Use</p>
      </div>
      <div>
        <h3>Menu</h3>
        <p>About</p>
        <p>Services</p>
        <p>Booking</p>
        <p>Blog</p>
      </div>
      <div>
        <h3>Contact</h3>
        <Icons>
          <FaYoutube/>
          <FaInstagram style={{margin:'0 15px'}}/>
          <FaNeos/>
        </Icons>
        <p>021 Korea Seul, LA</p>
        <p>camper@example.com</p>
        <p>(021) 345-6789-99</p>
      </div>
    </FooterWrapper>
  )
}

export default FooterComp