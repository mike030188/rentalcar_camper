import React, { useState } from 'react';
import NavbarComp from '../navbar/Navbar';
import FooterComp from '../footer/Footer';
import { Flex, FlexLeft, FlexRight, Title } from '../styles/Cart.style';
import carData from '../mock/carData';
import { ArrowLeft, ArrowRight, CarouselInner, CarouselWrapper, CostTitle } from '../styles/CartCarousel.style';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CartComp = () => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div style={{background:' #FAFAFA'}}>
      <NavbarComp/>
      <Title>
        <h2>Cart</h2>
      </Title>
      <Flex>

        <FlexLeft>
          <CarouselWrapper>     
            <ArrowLeft onClick={() => {
                      currImg > 0 && setCurrImg(currImg - 1);
                      }}>
                        <FaArrowLeft style={{color: 'white'}}/>
            </ArrowLeft>   

            <CarouselInner style={{ backgroundImage:`url(${carData[currImg].photo})` }}>
              <CostTitle><h5>Purchase price:</h5> {carData[currImg].cost}</CostTitle>                
            </CarouselInner>   

            <ArrowRight onClick={() => {
                        currImg < carData.length - 1 && setCurrImg(currImg + 1);
                        }}>
                          <FaArrowRight style={{color: 'white'}}/>
            </ArrowRight>     
          </CarouselWrapper>
        </FlexLeft>

        <FlexRight>
          
        </FlexRight>
      </Flex>

      <FooterComp/>
    </div>
  )
}

export default CartComp;