import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import ContactSection from '../sections/ContactSection'
import MapSection from '../sections/MapSectionSection'

const ContactView = () => {

  return (
    <>
      <BreadcrumbSection currentPage="Contact"/>
      <MapSection/>
      <ContactSection/>
    </>
  )
}

export default ContactView