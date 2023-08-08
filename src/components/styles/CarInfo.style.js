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

export const DetailWrap = styled.div`
display: flex;
height: 500px;
padding: 5px 70px;

& > div {
  flex: 1;
}
`
export const ItemInfo = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
width: 600px;
height: 360px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
margin-left: 50px;

`
export const FlexUp = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100px;
border-bottom: 1px solid rgba(55, 55, 55, 0.30);

& > div{
  flex:1;
}

h2{
  color: #000;
  font-size: 25px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
}

p{
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
}

h1{
  color: #006DAB;
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
}
`
export const FlexDown = styled.div`
display: flex;
padding-top: 20px;

& > div{
  flex: 1;
}

ul{
  list-style: none;  
}

li{
  margin: 10px 0;
}

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