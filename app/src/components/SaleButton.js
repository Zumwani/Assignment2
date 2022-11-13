import React from 'react'
import ActionButton from './ActionButton'

const SaleButton = ({ title, image }) => {
  return (
    <div className={"sale-button s-align-center w-md-auto bg-model " + image}>
        <div>
            <h2 className="c-white">{title}</h2>
            <ActionButton text="Flash Sale" color="white"/>
        </div>
    </div>
  )
}

export default SaleButton