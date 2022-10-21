import React from 'react'
import '../css/components/IconButton.css'

const IconButton = ({ icon }) => {
  return (
    <div className={"button-icon fa " + icon}></div>
  )
}

export default IconButton