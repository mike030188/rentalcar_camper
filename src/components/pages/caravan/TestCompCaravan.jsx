import React, { useState } from 'react'
import CostSidebarComp from '../../sidebar/CostBar'
import CaravanComponents from './CaravanComponents'
import HYCaravanController from './HYCaravanController'

const TestCompCaravan = () => {
  const [active, setActive] = useState(true)  
  return (
    <div style={{background:' #FAFAFA'}}>
        <CaravanComponents onClick={(state)=>{
            setActive(state)
        } }/>
        <div style={{display:'flex', padding:'0 70px'}}>
          <div style={{flex:'1', }}>
            <CostSidebarComp/>  
          </div>
          <div style={{flex:'4', marginLeft:'30px'}}>
            <HYCaravanController active={active}/>
          </div>
        </div>
    </div>
  )
}

export default TestCompCaravan