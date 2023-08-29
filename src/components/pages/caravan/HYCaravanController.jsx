import React from 'react'
import HMenuCaravan from './HMenuCaravan'
import YMenuCaravan from './YMenuCaravan'

const HYCaravanController = ({active}) => {

  return (
    <div>
        {active ?  <HMenuCaravan/>
        : <YMenuCaravan/>}
    </div>
  )
}

export default HYCaravanController