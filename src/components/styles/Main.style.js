import styled from "styled-components";

export const GridBox = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
gap: 10px 0;
justify-content: space-between;
padding: 0 70px;
`

export const GridItems = styled.div`
display: grid;
grid-template-columns: auto auto auto;
gap: 10px;
justify-content: center;
line-height: normal;


h2{
    color: #000;
    font-size: 28px;
    font-weight: 600;
}

p{
    color: #000;
    font-size: 16px;
    font-weight: 400;
}
`