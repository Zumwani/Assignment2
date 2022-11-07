import React from 'react'
import ActionButton from '../components/ActionButton';

const WinterClearanceSection = () => {
  return (
    <section className="main-layout height-560 container row width-100p text-start">

        <div className="col-7 position-relative bg-model model3 d-flex">
            <div className="margin-49 margin-bottom-100 align-bottom">
                <h2>Winter Clearance<br/>Up to 70% Off!</h2>
                <h6 className="max-width-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</h6>
                <ActionButton text="Shop Now" color="black"/>
            </div>
        </div>

        <div className="col-5 position-relative bg-model model4">
            <div className="margin-49 margin-bottom-100 align-bottom">
                <h2 className="margin-bottom-34">New<br/>Arrivals</h2>
                <ActionButton text="Shop Now" color="black"/>
            </div>
        </div>

    </section>
  )
}

export default WinterClearanceSection