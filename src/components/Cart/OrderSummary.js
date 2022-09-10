import React, { useState, useEffect } from 'react'
//router   
import { useNavigate } from 'react-router-dom'
//success message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// stripe component payment
import StripeCheckout from 'react-stripe-checkout';
//redux    
import * as Actions from '../../Redux/actions/Actions'
import { useDispatch } from 'react-redux'
//api request
import { public_request } from '../../util/requestMethods'
//redux 
import { useSelector } from 'react-redux'
let totalBasketPrice = 0;
function OrderSummary({ orders, setLoading }) {
    const user = useSelector(state => state?.user_data?.user);
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState(0);
    //make order successfullt paied
    const paymentMethod = async (token) => {
        setLoading(true);
        await public_request.post('product/payment', {
            totalPrice,
            tokenId: token.id,
        }).then(async (response) => {
            if (response?.status === 200) {
                await public_request.post('users/order', {
                    orders,
                    userId: user?._id
                }).then(async (response) => {
                    if (response?.status === 200) {
                        setLoading(false);
                        dispatch(Actions.user_orders([]));
                        setTimeout(() => {
                            Navigate('/profile');
                        }, 1500)
                    }
                }).catch(error => {
                    console.log(error);
                })
            } else {
                toast.error('somthing wrong', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch((err) => {
            toast.error('somthing wrong', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }
    useEffect(() => {
        let finish = false;
        if (!finish) {
            const total = orders?.map((order) => {
                return setTotalPrice(totalBasketPrice += (order?.quantity * order?.price))
            })
            if (total?.length === orders?.length) {
                finish = true;
                totalBasketPrice = 0;
            }
        }
    }, [orders])
    return (
        <div className='border d-flex flex-column gap-3 align-items-center p-5 rounded shadow my-5'>
            <h1 className='display-5'>Order Summary</h1>
            <div className=" d-flex flex-column justify-content-center align-items-center w-100 ">
                {
                    orders?.map((order, index) => (
                        <div className="text-muted d-flex justify-content-between w-100" key={index}>
                            <h5>{order?.name}</h5>
                            <h5>${(order?.price) * (parseFloat(order?.quantity))}</h5>
                        </div>))
                }
                <hr />
                <div className="d-flex justify-content-between w-100">
                    <h3>Total</h3>
                    <h3>${totalPrice}</h3>
                </div>
            </div>
            <StripeCheckout
                name="Online Shopping"
                image='logo.svg'
                billingAddress
                shippingAddress
                description={`Your total is $${totalPrice}`}
                amount={totalPrice * 100}
                token={paymentMethod}
                stripeKey={process.env.REACT_APP_P_K}
            >
                <button className='main-btn'>Checkout Now ${totalPrice}</button>
            </StripeCheckout>
            {/* toast container */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
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
export default OrderSummary