import React from 'react'
function SingleProductImg({ product }) {
    return (
        <div className="image center">
            <img src={`/assets/uploads/${product?.img}`} alt="" className='w-100 h-75' style={{ objectFit: 'contain'}} />
        </div>
    )
}
export default SingleProductImg