import React from 'react'
import Background from "../../components/Background/background";
import EachOverview from '../../components/EachOverview/eachoverview'
const analytics = () => {
  return (
    <div>
                      <Background/>

              <EachOverview props='Analytics' text='Customer Overview'/>
    </div>
  )
}

export default analytics