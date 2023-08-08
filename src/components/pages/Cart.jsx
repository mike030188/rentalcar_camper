import React from 'react';
import NavbarComp from '../navbar/Navbar';
import FooterComp from '../footer/Footer';
import { Flex, FlexLeft, FlexRight, Title } from '../styles/Cart.style';

const CartComp = () => {
  return (
    <div style={{background:' #FAFAFA'}}>
      <NavbarComp/>
      <Title>
        <h2>Cart</h2>
      </Title>
      <Flex>
        <FlexLeft>
          
        </FlexLeft>
        <FlexRight></FlexRight>
      </Flex>

      <FooterComp/>
    </div>
  )
}

export default CartComp;