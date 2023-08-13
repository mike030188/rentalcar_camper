import React, { useState } from 'react'
import MotorComponents from './MotorComponents'
import YHcontroller from './YHcontroller'

const TestComp = () => {
  const [active, setActive] = useState(true)  
  return (
    <div>
        <MotorComponents onClick={(state)=>{
            setActive(state)
        } }/>
        <YHcontroller active={active}/>
    </div>
  )
}

export default TestComp