import React from 'react'
import ActionButton from '../components/ActionButton';
import "../css/sections/Showcase.css";

const Section1 = () => {
  return (
    <section className="main-layout height-560 container row width-100p">

        <div className="col-7 position-relative background-model5 d-flex">
            <div className="margin-49 margin-bottom-100 align-bottom">
                <h2>Winter Clearance<br/>Up to 70% Off!</h2>
                <h6 className="max-width-342">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</h6>
                <ActionButton text="Shop Now" color="black"/>
            </div>
        </div>

        <div className="col-5 position-relative background-model6">
            <div className="margin-49 margin-bottom-100 align-bottom">
                <h2 className="margin-bottom-34">New<br/>Arrivals</h2>
                <ActionButton text="Shop Now" color="black"/>
            </div>
        </div>

    </section>
  )
}

export default Section1