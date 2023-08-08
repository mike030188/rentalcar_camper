import React from 'react';
import NavbarComp from '../navbar/Navbar';
import FooterComp from '../footer/Footer';
import { Flex, FlexLeft, FlexRight, Title } from '../styles/Cart.style';
import CartCarousel from './CartCarousel';

const CartComp = () => {
  return (
    <div style={{background:' #FAFAFA'}}>
      <NavbarComp/>
      <Title>
        <h2>Cart</h2>
      </Title>
      <Flex>
        <FlexLeft>
          <CartCarousel/>
        </FlexLeft>
        <FlexRight></FlexRight>
      </Flex>

      <FooterComp/>
    </div>
  )
}

export default CartComp;