import React from 'react'
import ActionButton from '../components/ActionButton';

const section3 = () => {
  return (
    <section className="main-layout height-403 container row width-100p gap-5">
        
        <div className="col position-relative background-model3 d-flex">
            <div className="margin-49 margin-bottom-100 align-bottom align-right">
                <h2 className="color-white margin-bottom-34">Pamela Raif's<br/>Top Picks</h2>
                <ActionButton text="Shop Now" color="black"/>
            </div>
        </div>

        <div className="col position-relative background-model4">
            <div className="margin-49 margin-bottom-100 align-bottom">
                <h2 className="margin-bottom-34">Let's Be<br/>Conscious</h2>
                <ActionButton text="Flash Sale" color="white"/>
            </div>
        </div>

    </section>
  )
}

export default section3