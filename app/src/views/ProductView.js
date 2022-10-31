import React from 'react'
import { useParams } from 'react-router-dom'

const ProductView = () => {
    
    const params = useParams();

    return (
        <>
            <div className='container mt-5'>
                <h1>{params.title}</h1>
            </div>
        </>
    )

}

export default ProductView