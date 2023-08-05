import styled from "styled-components";
import motorBgImage from '../../assets/motorBgImage.png'

export const HeadWrapper = styled.div`
background-image: url(${motorBgImage});
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
    margin-bottom: 13px;
}

h3{
    font-size: 27px;
    font-weight: 700;
}

h1{
    font-size: 80px;
    font-weight: 700;
}
`

