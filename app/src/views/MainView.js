import React, { useState } from 'react'
import Showcase from '../sections/Section0'
import Section1 from '../sections/Section1'
import ProductSection from '../sections/ProductSection'
import Section3 from '../sections/Section3'

const MainView = () => {
  return (
    <>
        <Showcase/>
        <Section1/>
        <ProductSection title="Featured Products"/>
        <Section3/>
    </>
  )

}

export default MainView