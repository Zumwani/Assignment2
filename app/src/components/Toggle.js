import React from 'react'

const Toggle = ({ id, name, text, onChange, checked }) => {
  return (<>
        <input className='toggle' id={id} name={name} onChange={onChange} type="radio" defaultChecked={checked}/>
        <label for={id}>{text}</label>
  </>)
}

export default Toggle