import styled from 'styled-components';

export const NavbarWrapper = styled.div`
display: flex;
/* position: fixed; */
align-items: center;
width: 100%;
height: 90px;
padding: 0 70px;
background: #FFF;
font-weight: 600;
box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
`

export const Text = styled.div`
flex: 1;
color: var(--blue, #006DAB);
font-size: 38px;
line-height: normal;
`
export const NavMenu = styled.div`
display: flex;
flex: 3;
justify-content: space-around;


`

export const MenuItems = styled.div`

p{
}

div{
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
}

select{
    color: var(--text, #373737);
    font-size: 16px;
    line-height: normal;
    border: none;
    cursor: pointer;
}

span{
    color: var(--text, #373737);
    font-size: 16px;
    line-height: normal;
}
`

export const NavIcons = styled.div`
display: flex;
flex:1;
justify-content: right;
`