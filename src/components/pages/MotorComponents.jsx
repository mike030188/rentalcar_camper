import React from 'react';
import {card} from '../mock/poducts';
import camping1 from '../../images/camping1.png'

const MotorComponents = () => {
  const datas = card.yangi
  console.log(datas)
  return (
    <div>{datas.map((data) => {
      return (
        <div key={data.id}>
          <p>{data.id}</p>
          <div>{data.car.company}</div>
          <div>{data.car.cost}</div>
          <div>{data.car.date}</div>
          <div>{data.car.license}</div>
          <div>{data.car.location}</div>
          <div>{data.car.name}</div>
          <div>{data.car.people}</div>
          <img src={camping1} alt="" />
          <div>{data.car.type}</div>
        </div>
      )
    })}</div>
  )
}

export default MotorComponents