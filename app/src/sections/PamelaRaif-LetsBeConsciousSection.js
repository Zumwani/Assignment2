import React from 'react'
import ActionButton from '../components/ActionButton';

const PamelaRaif_LetsBeConsiousSection = () => {
  return (
    <section className="main-layout height-403 container row width-100p gap-5">
        
        <div className="col position-relative bg-model model5 d-flex">
            <div className="margin-49 margin-bottom-100 align-bottom align-right">
                <h2 className="text-white margin-bottom-34">Pamela Raif's<br/>Top Picks</h2>
                <ActionButton text="Shop Now" color="black"/>
            </div>
        </div>

        <div className="col position-relative bg-model model6">
            <div className="margin-49 margin-bottom-100 align-bottom">
                <h2 className="margin-bottom-34">Let's Be<br/>Conscious</h2>
                <ActionButton text="Flash Sale" color="white"/>
            </div>
        </div>

    </section>
  )
}

export default PamelaRaif_LetsBeConsiousSection