import React, { useState } from 'react';
import carData from '../mock/carData';
import { ArrowLeft, ArrowRight, CarouselInner, CarouselWrapper, CostTitle } from '../styles/CartCarousel.style';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CartCarousel = () => {

    const [currImg, setCurrImg] = useState(0);
  return (
    <CarouselWrapper>     
        <ArrowLeft onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
                }}><FaArrowLeft/></ArrowLeft>   
        <CarouselInner style={{ backgroundImage:`url(${carData[currImg].photo})` }}>
            

            <CostTitle><h5>Purchase price:</h5> {carData[currImg].cost}</CostTitle>

            
        </CarouselInner>   
        <ArrowRight onClick={() => {
                currImg < carData.length - 1 && setCurrImg(currImg + 1);
                }}><FaArrowRight/></ArrowRight>     
    </CarouselWrapper>
  )
}

export default CartCarousel