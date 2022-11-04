import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({currentPage}) => {
  return (
    <section className='breadcrumb main-layout2'>
      <div className='container'>
        <ul className='breadcrumb-list'>
          <li><NavLink to="/">Home</NavLink></li>
          <li>{currentPage}</li>
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb