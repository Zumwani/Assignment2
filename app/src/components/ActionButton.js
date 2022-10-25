import React from 'react'

const ActionButton = ({color, simple, text}) => {
  return (
    <button className={"action " + color + (simple ? " simple" : "")}>{text}</button>
  )
}

export default ActionButton