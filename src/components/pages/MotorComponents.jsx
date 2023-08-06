import React from 'react';
import {card} from '../mock/poducts';
import NavbarComp from '../navbar/Navbar';
import { Col, Flex, GridContainer, GridItems, HeadWrapper, ItemBar, MainWrap, Row, SideBar, Text } from '../styles/MotorComponents.style';
import FooterComp from '../footer/Footer';
import { Link } from 'react-router-dom';
import { FaThLarge, FaThList } from 'react-icons/fa';

const MotorComponents = () => {
  const datas = card.yangi
  console.log(datas)
  return (
    <div style={{background:' #FAFAFA'}}>
      <NavbarComp/>
      <HeadWrapper>
        <h5>Home / Motors</h5>
        <h3>Our ranges</h3>
        <h1>Motors</h1>
      </HeadWrapper>
      <MainWrap>
        <SideBar>
          <Col cost>
            <Text>Cost of car</Text>
            <div style={{display:'flex', marginTop:'30px'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
              <label htmlFor="">from</label>
              <input type="text" />
              </div>
              <div style={{display:'flex', flexDirection:'column', marginLeft:'25px'}}>
              <label htmlFor="">to</label>
              <input type="text" />
              </div>
            </div>
          </Col>
          {/* <Col brand>
            <select name="" id="" style={{marginLeft:'10px', width:'227px', height:'30px' }}>
              <option value="">Select</option>
            </select>
          </Col> */}
        </SideBar>
        <ItemBar>
          <Row>
            <Flex left>
            <div>Item:</div>
            </Flex>
            <Flex right>
              <label htmlFor="">Sort by</label>
              <select name="" id="" style={{marginLeft:'10px', width:'227px', height:'30px' }}>
                <option value="">Select</option>
              </select>
              <select name="" id="" style={{margin:'0px 15px', width:'80px', height:'30px'}}>
                <option value="">60</option>
              </select>
              <button style={{borderRadius: '5px 0px 0px 5px'}}><FaThLarge/></button>
              <button style={{borderRadius: '0px 5px 5px 0px'}}><FaThList style={{color:'grey'}}/></button>
            </Flex>
          </Row>
          <GridContainer>{datas.map((data) => {
            return (
              <Link to={`/carinfo/${data.id}`}>
                <GridItems key={data.id}>              
                  {/* <p>{data.id}</p> */}
                  <div>{data.car.company}</div>
                  <div>{data.car.cost}</div>
                  <div>{data.car.date}</div>
                  <div>{data.car.license}</div>
                  <div>{data.car.location}</div>
                  <div>{data.car.name}</div>
                  <div>{data.car.people}</div>
                  <img src={data.car.photo} alt="" />
                  <div>{data.car.type}</div>              
                </GridItems>
              </Link>
            )
          })}
          </GridContainer>
        </ItemBar>
      </MainWrap>
      <FooterComp/>
    </div>
  )
}

export default MotorComponents