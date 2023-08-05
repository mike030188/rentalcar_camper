import React from 'react';
import {card} from '../mock/poducts';
import NavbarComp from '../navbar/Navbar';
import { HeadWrapper } from '../styles/MotorComponents.style';

const MotorComponents = () => {
  const datas = card.yangi
  console.log(datas)
  return (
    <div>{datas.map((data) => {
      return (
        <div key={data.id} style={{border: '1px solid black'}}>
        <NavbarComp/>
        <HeadWrapper>
          <h5>Home / Motors</h5>
          <h3>Our ranges</h3>
          <h1>Motors</h1>
        </HeadWrapper>

          <p>{data.id}</p>
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
      )
    })}</div>
  )
}

export default MotorComponents