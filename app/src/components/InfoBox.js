import React from 'react'
import IconButton from './IconButton'

const InfoBox = ({ icon, title, text }) => {
  return (
    <div className="info-box">
        <IconButton icon={icon}/>
        <h5>{title}</h5>
        <p className="color-gray">{text}</p>
    </div>
  )
}

export default InfoBox