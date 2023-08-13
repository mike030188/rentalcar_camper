import React from 'react';
import NavbarComp from '../navbar/Navbar';
import FooterComp from '../footer/Footer';
import SliderMainComp from '../UI/Slider.main';
import { Title } from '../styles/Cart.style';
import { GridBox, GridItems } from '../styles/Main.style';
import video1 from '../../assets/main/video1.png';
import video2 from '../../assets/main/video2.png';
import video3 from '../../assets/main/video3.png';
import video4 from '../../assets/main/video4.png';
import video5 from '../../assets/main/video5.png';
import video6 from '../../assets/main/video6.png';
import video7 from '../../assets/main/video7.png';
import video8 from '../../assets/main/video8.png';

import blog1 from '../../assets/main/blog1.png';
import blog2 from '../../assets/main/blog2.png';
import blog3 from '../../assets/main/blog3.png';
import blog4 from '../../assets/main/blog4.png';
import blog5 from '../../assets/main/blog5.png';
import blog6 from '../../assets/main/blog6.png';
import NavAccordionComp from '../navbar/NavAccordion';

const MainComp = () => {
  return (
    <div style={{background:' #FAFAFA'}}>
        <NavbarComp/>
            <SliderMainComp/>
            <Title>
              <h2>Recommend</h2>
            </Title>
            <Title>
              <h2>Videos</h2>
            </Title>
            <GridBox>
              <img src={video1} alt="" />
              <img src={video2} alt="" />
              <img src={video3} alt="" />
              <img src={video4} alt="" />
              <img src={video5} alt="" />
              <img src={video6} alt="" />
              <img src={video7} alt="" />
              <img src={video8} alt="" />
            </GridBox>
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
        <FooterComp/>
    </div>
  )
}

export default MainComp