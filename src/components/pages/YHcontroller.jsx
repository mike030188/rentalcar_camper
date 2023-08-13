import React from 'react'
import HMenuComp from './HMenu'
import YMenuComp from './YMenu'

const YHcontroller = ({active}) => {

  return (
    <div>
        {active ?  <HMenuComp/>
        : <YMenuComp/>}
    </div>
  )
}

export default YHcontroller