import styled from "styled-components";




export const ContentPanel = styled.div`
padding: 0 50px;
`

export const ItemHeader = styled.div`
display: flex;
justify-content: space-between;
background-color: transparent;

h3{
    color: var(--text, #373737);
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
}

select{
    width: 177px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.30);
    background: #FFF;    
    color: var(--blue, #006DAB);
    font-size: 14px;
    font-weight: 500;
    line-height: 100%; /* 14px */
    cursor:pointer;

}
`

export const GridPanel = styled.div`
display: grid;
grid-template-columns: auto;
`

export const GridItems = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

border-bottom: 1px solid rgba(55, 55, 55, 0.15);


`

