import styled from "styled-components";
import sliderImg01 from '../../assets/sliderImg01.png';
import sliderImg02 from '../../assets/sliderImg02.png';
import sliderImg03 from '../../assets/sliderImg03.png';


export const SliderItem = styled.div`

`
export const SliderItem1 = styled.div`
background: url(${sliderImg01});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 525px;
`
export const SliderItem2 = styled.div`
background: url(${sliderImg02});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 525px;
`
export const SliderItem3 = styled.div`
background: url(${sliderImg03});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 525px;
`