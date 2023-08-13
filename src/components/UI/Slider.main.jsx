import React from 'react';
import Slider from "react-slick";
import { SliderItem, SliderItem1, SliderItem2, SliderItem3 } from './Slider.style';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const SliderMainComp = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 900,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (
        <div>
            <Slider {...settings} style={{overflow: 'hidden', height:'535px', width: '100%'}}>
              
                <SliderItem>
                    <SliderItem1>
                        salom
                    </SliderItem1>
                </SliderItem>

                <SliderItem>
                    <SliderItem2>
                    bismillah
                    </SliderItem2>
                </SliderItem>
                <SliderItem>

                    <SliderItem3>
                    Allohu akbar
                    </SliderItem3>
                </SliderItem>                
            
            </Slider>
        </div>
        
    );
}

export default SliderMainComp;