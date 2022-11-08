import React from 'react'
import SpecialtyButton from '../components/SpecialtyButton'

const OurSpecialtySection = () => {
  return (
    <section className="padding-64 bg-light-gray container-fluid main-layout">
        <h5 className="row bold">Our Specialty</h5>
        <div className="row justify-content-between gap-35">
            <SpecialtyButton title="Track your order" image="specialty1"/>
            <SpecialtyButton title="Make a return" image="specialty2"/>
            <SpecialtyButton title="Make a price adjustment" image="specialty3"/>
        </div>
    </section>
  )
}

export default OurSpecialtySection