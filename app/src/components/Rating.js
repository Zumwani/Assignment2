import React from 'react'

const Rating = (props) => {
  return (
    <div className='container d-flex'>
        <div className='row m-auto'>
            <p className='star col'>{ props.count > 0 ? "★" : "☆" }</p>
            <p className='star col'>{ props.count > 1 ? "★" : "☆" }</p>
            <p className='star col'>{ props.count > 2 ? "★" : "☆" }</p>
            <p className='star col'>{ props.count > 3 ? "★" : "☆" }</p>
            <p className='star col'>{ props.count > 4 ? "★" : "☆" }</p>
        </div>
    </div>
  )
}

export default Rating