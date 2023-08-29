import React from 'react';
import { Checkbox, Container, FormControl} from '../styles/SignIn.style';
import { Button } from '../styles/CarInfo.style';
import { RegistrWrapper } from '../styles/Rregistrate.style';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';


const RegistrateComp = () => {
  return (
    <Container>
        <RegistrWrapper>
            <FormControl>
                <h1>Registrate 
                    <span style={{marginLeft:'56%'}}>
                        <Link to="/signin" style={{textDecoration:'none'}}>
                            <LiaTimesSolid/>
                        </Link>
                    </span>
                </h1>
                <label for='email'>Email</label>
                <input type="email" placeholder='Your email'/>
                <label for='password'>Password</label>
                <input type="password" placeholder='Your password'/>
                <label for='password'>Repeat your password</label>
                <input type="password" placeholder='Your password'/>
            </FormControl>
            <Checkbox>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <input type="checkbox" />
                    <label for="">Keep me logged in</label>
                </div>
                
            </Checkbox>
            
            <Button add wd='100%' hgt='45px' style={{marginTop: "27px"}}>REGISTRATE</Button>
            
        </RegistrWrapper>
    </Container>
  )
}

export default RegistrateComp