import Heading from '@/components/Heading'
import HowItWorksCard from '@/components/HowItWorksCard'
import { howitworksData } from '@/data/howitworksData'
import React from 'react'

const HowItWorks = () => {
  return (
    <div style={{padding: "100px 0"}}>
        {/* <p
        style={{ fontSize: "36px", padding: "32px" }}
        className="font-bold text-center font-bromega text-black"
      >
        How it works?
      </p> */}
      <Heading content='How it' marked='works?' rest='' />
      <div className="guideGrid2">
        {howitworksData.map((data, i) => (
          <HowItWorksCard key={i} img={data.img} title={data.title} desc={data.desc} />
        ))}
      </div>
    </div>
  )
}

export default HowItWorks