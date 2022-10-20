import React from 'react'
import '../css/views/main-page.css'
import Showcase from '../sections/Section0'
import Section1 from '../sections/Section1'
import Section2 from '../sections/Section2'
import Section3 from '../sections/Section3'

const MainView = () => {
  return (
    <>
        <Showcase/>
        <Section1/>
        <Section2/>
        <Section3/>
    </>
  )
}

export default MainView