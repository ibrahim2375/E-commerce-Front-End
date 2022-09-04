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
                <img src={`/assets/uploads/${order?.img}`} style={{ width: '200px', height: '250px', objectFit: 'contain' }} alt="" />
                <div>
                    <p className='fs-6'><span className='main-color'>Product: </span>{order?.name}</p>
                    {order?.color ? (<p><CircleIcon sx={{ color: order?.color }} /></p>) : null}
                    {order?.size ? (<p className='fs-6'><span className='main-color'>Size: </span>{order?.size}</p>) : null}
                </div>
            </div>
            <div>
                <h1 className='main-color'>{order?.quantity}</h1>
                <h1 className='main-color'>${order?.price}</h1>
            </div>
        </div>
    )
}

export default Card