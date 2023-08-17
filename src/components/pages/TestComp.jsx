import React, { useState } from 'react'
import MotorComponents from './MotorComponents'
import YHcontroller from './YHcontroller'
import CostSidebarComp from '../sidebar/CostBar'

const TestComp = () => {
  const [active, setActive] = useState(true)  
  return (
    <div style={{background:' #FAFAFA'}}>
        <MotorComponents onClick={(state)=>{
            setActive(state)
        } }/>
        <div style={{display:'flex', padding:'0 70px'}}>
          <div style={{flex:'1', }}>
            <CostSidebarComp/>  
          </div>
          <div style={{flex:'4', marginLeft:'30px'}}>
            <YHcontroller active={active}/>
          </div>
        </div>
    </div>
  )
}

export default TestComp