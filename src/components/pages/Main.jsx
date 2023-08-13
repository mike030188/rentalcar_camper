

import React from 'react'
import NavbarComp from '../navbar/Navbar'
import FooterComp from '../footer/Footer'
import SliderMainComp from '../UI/Slider.main'

const MainComp = () => {
  return (
    <div style={{background:' #FAFAFA'}}>
        <NavbarComp/>
            <SliderMainComp/>
        <FooterComp/>
    </div>
  )
}

export default MainComp