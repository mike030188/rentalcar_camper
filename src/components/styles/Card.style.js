import styled from 'styled-components'

export const StyledCard = styled.div`
display: flex;
align-items: center;
/* padding: 60px; */
flex-direction: ${({ layout }) => layout || 'row'};

h2{
    color: var(--text, #373737);
    font-size: 35px;
    font-weight: 600;
    line-height: normal;
    margin: 0 70px 0 70px;
}

p{
    color: #373737;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin: 20px 70px 0 70px;

}

img {
width: 100%;
}

& > div {
flex: 1;
}

 
`