import React from 'react';
import { Checkbox, Container, Divider1, FormControl, Icons, SignInWrapper } from '../styles/SignIn.style';
import { Button } from '../styles/CarInfo.style';
import GoogleIcon from '@mui/icons-material/Google';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SignInComp = () => {
  return (
    <Container>
        <SignInWrapper>
            <FormControl>
                <h1>Sign in</h1>
                <label for='email'>Email</label>
                <input type="email" placeholder='Your email'/>
                <label for='password'>Password</label>
                <input type="password" placeholder='Your password'/>
            </FormControl>
            <Checkbox>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <input type="checkbox" />
                    <label for="">Keep me logged in</label>
                </div>
                <div>
                    <a href="/registrate">Forget your password ?</a>
                </div>
            </Checkbox>
            
            <Button add wd='100%' hgt='45px' style={{marginTop: "27px"}}>SIGN IN</Button>
            <Divider1 class="divider">OR</Divider1>
            <Icons>
                <Link to='https://www.naver.com/index.html' style={{textDecoration: "none"}}>
                    <div style={{background:'#039600', color:'#FFF'}}>
                        <SiNaver/>
                    </div>
                </Link>
                <Link to='https://www.google.com/index.html' style={{textDecoration: "none"}}>
                    <div style={{background:'#BC0000', color:'#FFF', margin:'0 11px'}}>
                        <GoogleIcon/>
                    </div>
                </Link>
                <Link to='https://www.kakaocorp.com/page/service/service/KakaoTalk?lang=ENG&tab=all' style={{textDecoration: "none"}}>
                    <div style={{background:'#FFC700', color:'black', fontSize:'32px'}}>
                        <RiKakaoTalkFill/>
                    </div>
                </Link>
            </Icons>
            <Link to='/registrate' style={{textDecoration: "none"}}>
                <Button wd='100%' hgt='45px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>CREATE ACCOUNT</Button>
            </Link>
        </SignInWrapper>
    </Container>
  )
}

export default SignInComp