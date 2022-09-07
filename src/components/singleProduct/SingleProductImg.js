import React from 'react'

function SingleProductImg({ product }) {
    return (
        <div className="image center">
            <img src={`${process.env.REACT_APP_BD_SITE}/assets/uploads/${product?.img}`} alt="" className='w-100 h-75' style={{ objectFit: 'contain' }} />
        </div>
    )
}
export default SingleProductImg