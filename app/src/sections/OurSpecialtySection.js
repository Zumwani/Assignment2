import React from 'react'
import SpecialtyButton from '../components/SpecialtyButton'

const section4 = () => {
  return (
    <div className="padding-64 bg-light-gray container-fluid main-layout">
        <h5 className="row bold">Our Specialty</h5>
        <div className="row justify-content-between gap-35">
            <SpecialtyButton title="Track your order"/>
            <SpecialtyButton title="Make a return"/>
            <SpecialtyButton title="Make a price adjustment"/>
        </div>
    </div>
  )
}

export default section4