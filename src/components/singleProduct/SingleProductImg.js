import React from 'react'
function SingleProductImg({ product }) {
    return (
        <div className="image d-flex justify-content-center align-items-center">
            <img src={`${process.env.REACT_APP_API}img/${product?.img}`} alt="" className='w-100' style={{ objectFit: 'contain' }} />
        </div>
    )
}
export default SingleProductImg