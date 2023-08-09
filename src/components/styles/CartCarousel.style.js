import styled from "styled-components";

export const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 811px;
    height: 476px;
    padding: 0 20px;
    border-radius: 10px;
    background: #FFF;
    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

`
export const ArrowLeft = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
background: #006DAB;
border-radius: 50%;
`
export const CarouselInner = styled.div`
    height: 90%;
    width: 90%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: end;
    justify-content:center;
`
export const CostTitle = styled.div`
display: flex;
align-items: center;
justify-content:center;
width: 350px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

h5{
    color: var(--text, #373737);
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin-right: 10px;
}
`

export const ArrowRight = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
background: #006DAB;
border-radius: 50%;
`