import React from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection'
import ContactSection from '../sections/ContactSection'
import MapSection from '../sections/MapSection'

const ContactView = () => {

  document.title = "Contact - Fixxo";

  return (
    <>
      <BreadcrumbSection currentPage="Contacts"/>
      <MapSection/>
      <ContactSection/>
    </>
  )
}

export default ContactView