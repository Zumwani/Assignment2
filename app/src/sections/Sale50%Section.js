import React from 'react'
import ActionButton from '../components/ActionButton';
import image1 from '../img/1.png'
import image2 from '../img/2.png'

const Sale50PercentSection = () => {
  return (
    <section className="main-layout mt-0">
        <div className="showcase background-light-gray">
          <img src={image1}/>
          <img src={image2}/>
        {/* </div> */}
        
        {/* <div className="showcase-content section horizontal"> */}
            <div>
                <h1 className="text-align-center">SALE UP<br/>To 50% Off</h1>
                <h5>Online shopping free home delivery over $100</h5>
                <ActionButton text="Shop now" color="red"/>
            </div>
        </div>
    </section>
  )
}

export default Sale50PercentSection