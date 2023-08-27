import styled from 'styled-components';

export const GridList = styled.div`
display: grid;
grid-template-areas: auto;
gap: 20px;
margin: 20px 0 20px 0;

`

export const Flex = styled.div`
display: flex;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`

export const FlexRight = styled.div`
display: flex;
justify-content: center;
flex: 1;

`
export const FlexMid = styled.div`
flex: 1;
padding: 32px 10px 10px;
color: var(--text, #373737);
line-height: normal;


h2{
    font-size: 18px;
    font-weight: 600;
}

p{
    font-size: 12px;
    font-weight: 400;
    margin-bottom:45px;

}
`
export const FlexLeft = styled.div`
flex: 1;
padding: 32px 18px 10px 10px;
color: var(--text, #373737);
line-height: normal;

h2{
    text-align:right;
    font-size: 18px;
    font-weight: 600;
}

span{
    display: flex;
    justify-content: right;
    margin-bottom:45px;
    font-size: 14px;
    font-weight: 400;

}
`