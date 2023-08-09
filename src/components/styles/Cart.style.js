import styled from "styled-components";

export const Title = styled.div`
display: flex;
justify-content: center;
font-weight: 600;
padding-top: 40px;
margin-bottom: 30px;

h2{
    font-size:35px;
    color:'#373737';
    padding-bottom: 5px;
    border-bottom: 1px solid #FF7A00;
}
`

export const Flex = styled.div`
display: flex;
padding: 30px 129px 72px 70px;

`
export const FlexLeft = styled.div`
display: flex;
flex: 5;
`

export const FlexRight = styled.div`
display: flex;
flex-direction: column;
flex: 2;
overflow-y: scroll;
`

export const DescriptionTitle = styled.div`
padding-top: 30px;
height: 476px;
line-height: normal;


h2{
    color: var(--text, #373737);
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
}

span{
    font-size: 17px;
    font-weight: 500;    
}

p{
    font-size: 15px;
    font-weight: 400;
    margin: 10px 0 155px;
}
`

export const FormAccount = styled.div`

`

export const FormCard = styled.div`

`

export const Text = styled.div`
color: #000;
font-size: 25px;
font-weight: 600;
line-height: normal;
margin: 50px 0 30px;
`
export const FormControl = styled.div`
display: flex;
flex-direction: column;
font-family: 'Open Sans', sans-serif;
line-height: normal;

label{
    color: rgba(55, 55, 55, 0.80);
    font-size: 16px;
    font-weight: 600;
}

input{
    width: 311px;
    height: 50px;
    color: rgba(55, 55, 55, 0.60);
    font-size: 15px;
    font-weight: 400;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.10);
    border: none;
    margin: 10px 0 20px;

}
`