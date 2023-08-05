import React from 'react'
import NavbarComp from '../navbar/Navbar'
import FooterComp from '../footer/Footer'
import { Button, HeadWrapper } from '../styles/CarInfo.style'

const CarInfo = () => {
  return (
    <div>
      <NavbarComp/>
      <HeadWrapper>          
          <h2>Aidal</h2>
          <div style={{display:'flex', }}>
            <Button add style={{marginRight:'12px'}}>ADD TO CART</Button>
            <Button comp>COMPARE</Button>
          </div>
          
      </HeadWrapper>
      <h1>Salom Dunyo!</h1>
      <FooterComp/>
    </div>
  )
}

export default CarInfo