import React from 'react'
import NavbarComp from '../navbar/Navbar'
import FooterComp from '../footer/Footer'
import { Button, HeadWrapper } from '../styles/CarInfo.style'
import Card from './Card'
import content from '../mock/content'

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
      <div>{content.map((item, index) => ( 
      <Card key={index} item={item}/>))}        
      </div>
      <div style={{paddingLeft:'70px', marginTop:'-130px', marginBottom:'154px'}}>
        <Button add style={{marginRight:'12px'}}>ADD TO CART</Button>
        <Button comp style={{border:'2px solid #006DAB', color:'#006DAB'}}>COMPARE</Button>
      </div>
      
      
      <FooterComp/>
    </div>
  )
}

export default CarInfo