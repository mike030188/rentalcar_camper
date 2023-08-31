import React from 'react';
import SliderMainComp from '../UI/Slider.main';
import { Title } from '../styles/Cart.style';
import { GridItems } from '../styles/Main.style';
import blog1 from '../../assets/main/blog1.png';
import blog2 from '../../assets/main/blog2.png';
import blog3 from '../../assets/main/blog3.png';
import blog4 from '../../assets/main/blog4.png';
import blog5 from '../../assets/main/blog5.png';
import blog6 from '../../assets/main/blog6.png';
import CarouselApp from '../UI/ExampleCarusel';
import PopupApp from '../popup/PopupTest';

const MainComp = () => {
  return (
    <div style={{background:' #FAFAFA'}}>
            <SliderMainComp/>
            <Title>
              <h2>Recommend</h2>
            </Title>
            <CarouselApp/>
            <Title>
              <h2>Videos</h2>
            </Title>
            <PopupApp/>
            <Title>
              <h2>Blogs</h2>
            </Title>
            <div style={{display:'flex', padding:'0 70px 80px 70px'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
                <h2>Camper</h2>
                <p style={{color:'#FF7A00', margin:'35px 0 15px'}}>@camper_1</p>
                <p>Camping truly is for everyone, from your oldest family member to little campers just trekking out for the first time. Whether your plan is to relax, explore or reconnect, CAMPER campgrounds are a great place to create memories with those you love.</p>
              </div>
              <GridItems>
                <img src={blog1} alt="" />
                <img src={blog2} alt="" />
                <img src={blog3} alt="" />
                <img src={blog4} alt="" />
                <img src={blog5} alt="" />
                <img src={blog6} alt="" />
              </GridItems>
            </div>
    </div>
  )
}

export default MainComp