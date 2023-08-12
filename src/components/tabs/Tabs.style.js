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

export const InquiryLeft = styled.div`
padding-top: 50px;
flex: 2;
line-height: normal;

p{
    margin: 25px 0 5px;
    color: rgba(55, 55, 55, 0.50);
    font-size: 16px;
    font-weight: 500;
}

h2{
    width: 707px;
    border-bottom: 1px solid rgba(55, 55, 55, 0.30);
    color: #373737;
    font-size: 20px;
    font-weight: 600;
}
`

export const InquiryRight = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex:1;
width: 450px;
height: 432px;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
color: #fff;

h1{
    color: var(--text-color, #023047);
    font-size: 24px;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
    margin: 30px 0 20px;
}

input{
    width: 390px;
    height: 50px;
    font-size: 14px;
    border-radius: 8px;
    border: none;
    background: lightgrey;
    margin-bottom: 10px;
    padding-left: 10px;
    cursor: pointer;

}

textarea{
    width: 390px;
    height: 120px;
    border-radius: 8px;
    border: none;
    background: lightgrey;    
    font-size: 14px;
    font-weight: 500;
    line-height: 100%; /* 14px */
    margin-bottom: 25px;
    padding: 10px 0 0 10px;
    cursor: pointer;

}
`