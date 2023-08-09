import React, { useState } from 'react';
import NavbarComp from '../navbar/Navbar';
import FooterComp from '../footer/Footer';
import { DescriptionTitle, Flex, FlexLeft, FlexRight, FormAccount, FormCard, FormControl, Text, Title } from '../styles/Cart.style';
import { ArrowLeft, ArrowRight, CarouselInner, CarouselWrapper, CostTitle } from '../styles/CartCarousel.style';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button } from '../styles/CarInfo.style';
import carData from '../mock/carData';

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
          <DescriptionTitle>
            <h2>{carData[currImg].name}</h2>
            <h2 style={{color:'#006DAB'}}>{carData[currImg].cost}</h2>
            <span>Description</span>
            <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Feugiat viverra amet,<br/>
             tortor<br/>
             tristique odio scelerisque aenean<br/>
             sodales.<br/>
             Nunc risus dolor amet porttitor tellus
            </p>
            <Button add wd='311px' hgt='45px'>Continue to payment</Button>
          </DescriptionTitle>
          <FormAccount>
            <Text>Enter Account Details</Text>
            <FormControl>
              <label for='name'>First name</label>
              <input type="text" placeholder='First name'/>
              <label for='name'>Last name</label>
              <input type="text" placeholder='Last name'/>
              <label for='email'>Email</label>
              <input type="email" placeholder='Your email'/>
              <label for='number'>Mobile Phone Number</label>
              <input type="number" placeholder='Mobile Phone Number'/>
            </FormControl>
          </FormAccount>
          <FormCard>
            <Text>Card</Text>
              <FormControl>
                <label for='name'>Name on card</label>
                <input type="text" placeholder='Name on card'/>
                <label for='name'>Card Number</label>
                <input type="number" placeholder='Card Number'/>

                <label for='name'>Expiration Month</label>
                <select name="" id="">
                  <option value="month">01</option>
                </select>
                <label for='name'>Expiration Year</label>
                <select name="" id="">
                  <option value="year">2022</option>
                </select>
                <label for='email'>CVV</label>
                <input type="text" placeholder='Your CVV'/>
                <label for='number'>Billing Zip Cod</label>
                <input type="number" placeholder='Billing Zip Cod'/>
              </FormControl>
              <Button add wd='311px' hgt='45px' style={{marginTop: "58px"}}>Place Order</Button>
          </FormCard>          
        </FlexRight>
      </Flex>
      <FooterComp/>
    </div>
  )
}

export default CartComp;