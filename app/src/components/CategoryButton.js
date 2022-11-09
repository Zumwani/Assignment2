import React from 'react'

const CategoryButton = ({ categoryName, image }) => {
  return (
    <div className='button-category'>
        <img src={image}/>
        <p>{categoryName}</p>
    </div>
  )
}

export default CategoryButton