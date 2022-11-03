import React from 'react'
import ActionButton from './ActionButton'

const SaleButton = ({ title }) => {
  return (
    <div className="sale-button">
        <div>
            <h2 className="color-white">{title}</h2>
            <ActionButton text="Flash Sale" color="white"/>
        </div>
    </div>
  )
}

export default SaleButton