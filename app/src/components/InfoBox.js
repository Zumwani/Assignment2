import React from 'react'
import IconButton from './IconButton'

const InfoBox = ({ icon, title, text }) => {
  return (
    <div className="info-box mt-4 mt-md-0 d-inline-block">
        <IconButton icon={icon}/>
        <h5>{title}</h5>
        <p className="c-gray">{text}</p>
    </div>
  )
}

export default InfoBox