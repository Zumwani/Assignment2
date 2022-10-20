import React from 'react'
import '../css/components/ActionButton.css';

const ActionButton = (props) => {
  return (
    <button className={"action " + props.color}>{props.text}</button>
  )
}

export default ActionButton