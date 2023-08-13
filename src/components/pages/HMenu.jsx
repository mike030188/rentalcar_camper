import React from 'react'
import { Button, GridContainer, GridItems } from '../styles/MotorComponents.style'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import carData from '../mock/carData';


const HMenuComp = () => {
  return (
    <GridContainer>{carData.slice(0, 20).map((item) => {
        return (
          
            <GridItems key={item.id}>      
              <img src={item.photo} alt="campingCar" />
              <div style={{fontWeight:'700' }}>{item.name}</div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>{item.company} </div>
              <span><FaStar style={{ color: "#f9a826" }}/>5.3</span>
              </div>
              <h2 style={{color:'#435a68'}}>{item.cost}</h2>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <Button wd='100px' hgt='35px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Order</Button>
                <Link to={`/carinfo/${item.id}`}  style={{textDecoration:'none'}}>
                  <Button wd='100px' hgt='35px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Detail</Button>
                </Link>
              </div>


              {/* <p>{data.id}</p> */}
              {/* <div>{data.car.company}</div>
              <div>{data.car.cost}</div>
              <div>{data.car.date}</div>
              <div>{data.car.license}</div>
              <div>{data.car.location}</div>
              <div>{data.car.name}</div>
              <div>{data.car.people}</div>
              <img src={data.car.imgUrl} alt="" />
              <div>{data.car.type}</div>  */}             
            </GridItems>
          
        )
      })}
      </GridContainer>
  )
}

export default HMenuComp