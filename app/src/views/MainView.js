import React from 'react'
import '../css/views/main-page.css'
import Showcase from '../sections/Showcase'
import Section1 from '../sections/Section1'
import Section3 from '../sections/Section3'

const MainView = () => {
  return (
    <>
        <Showcase/>
        <Section1/>
        <Section3/>
    </>
  )
}

export default MainView