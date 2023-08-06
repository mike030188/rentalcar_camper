import React from 'react';
import {card} from '../mock/poducts';
import NavbarComp from '../navbar/Navbar';
import { GridContainer, HeadWrapper } from '../styles/MotorComponents.style';
import FooterComp from '../footer/Footer';
import { Link } from 'react-router-dom';

const MotorComponents = () => {
  const datas = card.yangi
  console.log(datas)
  return (
    <div>
      <NavbarComp/>
      <HeadWrapper>
        <h5>Home / Motors</h5>
        <h3>Our ranges</h3>
        <h1>Motors</h1>
      </HeadWrapper>
      <GridContainer>{datas.map((data) => {
        return (
          <Link to={`/carinfo/${data.id}`}>
            <div key={data.id} style={{border: '1px solid black'}}>              
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
            </div>
          </Link>
        )
      })}</GridContainer>
      <FooterComp/>
    </div>
  )
}

export default MotorComponents