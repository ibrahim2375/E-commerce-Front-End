import React from 'react'
function SingleProductImg({ product }) {
    return (
        <div className="image d-flex justify-content-center align-items-center">
            <img src={`/assets/uploads/${product?.img}`} alt="" className='w-100' style={{ objectFit: 'contain' }} />
        </div>
    )
}
export default SingleProductImg