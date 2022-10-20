import React from 'react'
import '../css/components/IconButton.css'

const IconButton = (props) => {
  return (
    <div className={"button-icon fa " + props.icon}></div>
  )
}

export default IconButton