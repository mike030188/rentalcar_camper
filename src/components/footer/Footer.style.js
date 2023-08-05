import styled from 'styled-components';

export const FooterWrapper = styled.div`
display: flex;
width: 100%;
height: 350px;
padding: 0 190px 0 70px;
background: var(--blue, #006DAB);
color: #FFF;
line-height: normal;


& > div {
    flex:1;
}

h3{
    font-size: 20px;
    font-weight: 600;
    margin: 65px 0 40px;

}

p{
    font-size: 14px;
    margin-bottom: 9px;
}
`
export const Icons = styled.div`
    margin-bottom: 9px;


`
