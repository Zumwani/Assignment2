import React from 'react'

const SpecialtyButton = ({ title }) => {
  return (
    <button className="button-specialty">
      <div>
          <h6>{title}</h6>
          <a className="underline">Get Started {">"}</a>
      </div>
    </button>
  )
}

export default SpecialtyButton