import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
background-color: #FAFAFA;
`

export const SignInWrapper = styled.div`
padding: 33px 33px 49px 33px;
width: 500px;
height: 614px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
`

export const FormControl = styled.div`
display: flex;
flex-direction: column;
font-family: 'Open Sans', sans-serif;
line-height: normal;

h1{
    color: var(--text, #373737);
    font-size: 27px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 25PX;
}

label{
    color: rgba(55, 55, 55, 0.80);
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
}

input{
    width: 100%;
    height: 50px;
    color: rgba(55, 55, 55, 0.60);
    font-size: 15px;
    font-weight: 400;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.10);
    border: none;
    padding-left: 20px;
    margin: 10px 0 19px 0;
}
`

export const Checkbox = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
font-family: Open Sans;
line-height: normal;
color: #373737;

input{
    width: 23px;
    height: 22px;
    border-radius: 5px;
    background: rgba(55, 55, 55, 0.10);
}

label{
    font-size: 14px;
    font-weight: 400;
    margin-left: 7px;
}

a{
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer
}
`

export const Divider1 = styled.div`
margin-top: 20px;

& {
    color: #6D6D6D;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
}

&:before, &:after {
  flex: 1;
  content: '';
  padding: 1px;
  background-color: rgba(55, 55, 55, 0.15);
  margin: 10px 25px;
}
`
export const Icons = styled.div`
display: flex;
justify-content: center;
margin:20px 0;

div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
        transform: scale(0.97);
    }
}
`