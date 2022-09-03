import React, { useState } from 'react'
//success message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//timeago
// import TimeAgo from 'timeago-react';
//components
import SingleProductColor from './SingleProductColor'
import SingleProductSize from './SingleProductSize'
//redux
import * as Actions from '../../Redux/actions/Actions'
import { useDispatch, useSelector } from 'react-redux';
const intialValue = { size: null, color: null, quantity: '1' };
function SingleProductData({ product }) {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.user_data.user_orders)
    const [selected, setSelected] = useState(intialValue)
    //handel all data user need to add to cart
    const handelSelectChange = (e) => {
        const value = e.target.value;
        setSelected({ ...selected, [e.target.name]: value })
    }
    //add to cart handle
    const AddToCart = async (productId) => {
        const res = orders?.filter(order => order?._id === productId);
        if (res.length > 0) {
            toast.warn('this order already added before!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            await dispatch(Actions.user_orders([...orders, { ...product, ...selected }]));
        }
    }
    return (
        <div className="main-data d-flex justify-content-center align-items-start flex-column gap-3" style={{ flex: '.5' }}>
            <h1 className='display-3 main-color'>{product?.name}</h1>
            {/* <p className='text-muted'>{}</p> */}
            {/* <TimeAgo
                datetime={`${product?.createdAt}`}
            /> */}
            <p>{product?.description}</p>
            <h2 className='display-5 main-color'>{product?.price}$</h2>
            <div>
                <SingleProductColor colors={product?.avilableColors} handelSelectChange={handelSelectChange} />
                <SingleProductSize sizes={product?.avilableSizes} handelSelectChange={handelSelectChange} />
            </div>
            <div className="d-flex justify-content-around align-items-center w-100">
                <input type="number" min={1} max={10} name="quantity" defaultValue={1}
                    className='bg-light rounded border w-25 py-2' onChange={(e) => handelSelectChange(e)} />
                <button className="btn-over mx-1" onClick={() => AddToCart(product?._id)}>Add To Cart</button>
            </div>
            {/* toast container */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            {/* toast container */}
        </div>
    )
}

export default SingleProductData