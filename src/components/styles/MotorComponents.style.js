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

export const MainWrap = styled.div`
display: flex;
padding: 0 70px;

`

export const SideBar = styled.div`
flex: 1;
color: var(--text, #373737);
padding: 87px 28px 0 0;
`

export const Col = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 50px;

label{
    font-size: 14px;
    font-weight: 500;
    line-height: 100%; /* 14px */
}

input{
    width:91px;
    height:36px;
    border-radius: 10px;
    border: 1px solid rgba(55, 55, 55, 0.60);

}
`

export const Text = styled.div`
font-size: 18px;
font-weight: 600;
padding-bottom: 15px;
line-height: 100%; /* 18px */
border-bottom: 1px solid rgba(55, 55, 55, 0.30);
`
export const Line = styled.div`
margin-top: 15px;
border-bottom: 1px solid rgba(55, 55, 55, 0.30);
`
export const Form = styled.div`
padding-top: 15px;

.form-group {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

input{
    width: 22px;
    height: 22px;
    border-radius: 5px;
    border: 1px solid #666;
    background: #FFF;
}

label{
    margin-left: 10px;
    color: var(--text, #373737);
    font-size: 14px;
    font-weight: 500;
    line-height: 100%; /* 14px */
    
}
`

export const Button = styled.button`
width: ${({wd})=>wd || '115.804px'};
height: ${({hgt})=>hgt || '38.968px'};
flex-shrink: 0;
color: #FFF;
font-weight: 700;
font-size: 16px;
border:none;
border-radius: ${({br})=>br || '60px'};
background: ${({bg})=>bg || 'var(--sariq, #FF7A00)'} ;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
cursor: pointer;

&:hover{
    opacity:0.9;
    transform: scale(0.98);
    color: black;
}
`


export const ItemBar = styled.div`
flex: 4;

`
export const Row = styled.div`
display: flex;
font-size: 18px;
font-weight: 600;
color: var(--text, #373737);
padding: 80px 0 10px;
line-height: 100%; /* 18px */
border-bottom: 1px solid rgba(55, 55, 55, 0.30);

`

export const Flex = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: ${(props) => props.right ? "right" : ""};

select{
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.30);
}

button{
    width: 40px;
    height: 30px;    
    border: 1px solid rgba(55, 55, 55, 0.30);
}

`

export const GridContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
gap: 10px;
padding-top: 30px;

img{
    width:80%;

}

`

export const GridItems = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 5px 15px;
width: 223px;
height: 307px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);


`