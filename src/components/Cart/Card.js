import React from 'react'
// mui icons
import CircleIcon from '@mui/icons-material/Circle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
function Card({ order, removeItemFromCart }) {
    return (
        <div className='d-flex justify-content-around align-items-center gap-5 flex-wrap border rounded  position-relative my-2'>
            <div style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer' }}>
                <CloseOutlinedIcon sx={{ fontSize: 30 }} onClick={() => removeItemFromCart(order?._id)} />
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={`${process.env.REACT_APP_API}img/${order?.img}`} style={{ width: '200px', height: '250px', objectFit: 'contain' }} alt="" />
                <div>
                    <p className='fs-6'><span className='main-color'>Product: </span>{order?.name}</p>
                    <p><CircleIcon sx={{ color: order?.color }} /></p>
                    <p className='fs-6'><span className='main-color'>Size: </span>{order?.size}</p>
                </div>
            </div>
            <div>
                <h1>{order?.quantity}</h1>
                <h1>${order?.price}</h1>
            </div>
        </div>
    )
}

export default Card