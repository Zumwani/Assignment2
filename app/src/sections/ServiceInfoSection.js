import React from 'react'
import InfoBox from '../components/InfoBox'

const ServiceInfoSection = () => {
  return (
    <>

    <div className='line main-layout2'></div>

    <section className="w-100">
        <div className="mx-auto">
            <InfoBox icon="background-customer-support" title="Customer Support" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
            <InfoBox icon="background-credit-card" title="Secure Payments" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
            <InfoBox icon="background-delivery-truck" title="Free Home Delivery" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
            <InfoBox icon="background-delivery-truck" title="30 Day Return Policy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
        </div>
    </section>

    </>
  )
}

export default ServiceInfoSection