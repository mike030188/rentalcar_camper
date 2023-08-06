import styled from "styled-components";
import carInfoBgImg from '../../assets/carInfoBgImg.png'

export const HeadWrapper = styled.div`
background-image: url(${carInfoBgImg});
background-repeat: no-repeat;
background-position:center;
background-size: cover;
height:704px;
color: #FFF;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h2{
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 30px;
}
`

export const MainWrapper = styled.div`

`

export const Button = styled.button`
width: 181px;
height: 50px;
color: #FFF;
font-size: 16px;
font-weight: 700;
border-radius: 10px;
background-color: ${(props)=>props.add ? "#006DAB" : "transparent"};
border: ${(props)=>props.add ? "none" : "2px solid #FFF"};
cursor: pointer;

&:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

`