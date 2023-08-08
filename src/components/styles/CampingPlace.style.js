import styled from "styled-components";
import campingPlacesBg from '../../assets/campingPlacesBg.png';

export const HeadWrapper = styled.div`
background-image: url(${campingPlacesBg});
background-repeat: no-repeat;
background-position:center;
background-size: cover;
height: ${({hg})=>hg || "350px"};
color: #FFF;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


h5{
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 38px;
}


h1{
    font-size: 80px;
    font-weight: 700;
}
`


export const GridContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
flex-direction:'column';
padding: 80px 70px;
gap: 40px 30px;

img{
    width: 100%;
}

h3{
    margin: 10px 0;
}
`