import React from 'react'
import ActionButton from '../components/ActionButton';

const Showcase = () => {
  return (
    <section className="main-layout">
        <div className="showcase background-light-gray">
        </div>
        
        <div className="showcase-content section horizontal">
            <div>
                <h1 className="text-align-center">SALE UP<br/>To 50% Off</h1>
                <h5>Online shopping free home delivery over $100</h5>
                <ActionButton text="Shop now" color="red"/>
            </div>
        </div>
    </section>
  )
}

export default Showcase