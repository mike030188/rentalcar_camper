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
/* border: 1px solid black; */
`
export const NavMenu = styled.div`
display: flex;
flex: 3;
/* border: 1px solid black; */
justify-content: space-around;
`

export const MenuItems = styled.div`
/* position: relative; */
/* display: flex; */


button{
    display: flex;
    align-items: center;
    color: var(--text, #373737);
    font-size: 16px;
    line-height: normal;
    border: none;
    cursor: pointer;
    background-color: transparent;

    &:hover{
        background-color: rgba(0, 109, 171, 0.05);
        border-radius: 5px
    }
}

div{
    width: 100%;
    background-color: #FFF;
    left: 0;
    z-index: 20;
    position: absolute;
    height: 290px;
    margin-top: 35px;   
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 12px;
    border-top: 1px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .btn-seeall{
        width:230px;
        height:40px;
        margin-top:45px;
        border-radius: 10px;
        background: var(--blue, #006DAB);
        padding: 9px 80px;
        color: #FFF;
        font-size: 18px;
        font-weight: 600;

        &:hover{
            border-radius: 10px;
            background-color: #006DAB;
            opacity: 0.7;
        }

    }
}

P{
    cursor: pointer;
    &:hover{
        display: flex;
        color: red;
        background-color: lightgrey;
        opacity:0.9;
        transform: scale(0.98);
    }
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
/* border: 1px solid black; */

`