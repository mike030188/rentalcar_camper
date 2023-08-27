import React from 'react'
import carData from '../mock/carData'
import { Button } from '../styles/MotorComponents.style'
import { Flex, FlexLeft, FlexMid, FlexRight, GridList } from '../styles/YMenu.style'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const YMenuComp = () => {
  return (
    <GridList>{carData.slice(0, 7).map((item) => {
      return (
        <Flex>
          <FlexRight>
            <img src={item.photo} alt="" width='80%' height='145px'/>
          </FlexRight>
          <FlexMid>
            <h2>{item.name}</h2>
            <p>{item.company}</p>
            <Button wd='100%' hgt='35px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Order</Button>
                
          </FlexMid>
          <FlexLeft>
            <h2>{item.cost}</h2>
            <span><FaStar style={{ color: "#f9a826" }}/>5.3</span>
            <Link to={`/carinfo/${item.id}`}  style={{textDecoration:'none'}}>
              <Button wd='100%' hgt='35px' br='10px' bg='transparent' style={{border: '1px solid #006DAB', color:'#006DAB'}}>Detail</Button>
            </Link>
          </FlexLeft>
        </Flex>
      )
    })}
      

    </GridList>
  )
}

export default YMenuComp