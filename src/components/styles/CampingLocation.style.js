import styled from "styled-components";

export const ImageWrapper = styled.div`
display: flex;
padding: 40px 78px 20px 70px;
justify-content: space-between;
`

export const Title = styled.div`
color: #000;
font-size: 25px;
font-weight: 600;
line-height: normal;
padding: 0 0 12px 70px;
`

export const Flex = styled.div`
display: flex;
line-height: normal;


a{
    color: var(--blue, #006DAB);
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    padding: 0 20px 14px 70px;

    &:hover{
        opacity: 0.9;
        transform: scale(0.98);        
    }
}

button{
    width: 120px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid var(--sariq, #FF7A00);
    color: var(--sariq, #FF7A00);
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
    cursor: pointer;
    transform: 0.3s;

    &:hover{
        opacity: 0.9;
        transform: scale(0.98);        
    }
}
`

export const Info = styled.div`
display: flex;
align-items: center;
border-top: 1px solid rgba(55, 55, 55, 0.20);
height: 92px;
margin: 0 70px;
line-height: normal;

`
export const InfoItemLeft = styled.div`
display: flex;
flex-direction: column;


div{
    display: flex;
}

`
export const Span = styled.div`
width: 20px;
height: 20px;
cursor: pointer;

&:hover{
        opacity: 0.9;
        transform: scale(0.98);
    }

`
export const InfoItemRight = styled.div`
display: flex;
flex-direction: column;
margin-left: 127px;

div{
    display: flex;
}
span{    
    color: var(--sariq, #FF7A00);
    font-size: 14px;
    font-weight: 500;
    margin: 0 5px;
}

a{
    color: var(--blue, #006DAB);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
}
`

export const Text = styled.div`
color: var(--text, #373737);
font-size: 14px;
font-weight: 400;

`

export const SubTitle = styled.div`
height: 98px;
line-height: normal;
padding: 0 70px;
margin-bottom: 50px;

h4{
    color: var(--blue, #006DAB);
    font-size: 16px;
    font-weight: 500;
}

p{
    color: var(--text, #373737);
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
}
`