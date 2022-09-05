import React from 'react'
//bootstrap components
import Container from 'react-bootstrap/Container';
//components
import Card from '../../components/Cart/Card'
import OrderSummary from '../../components/Cart/OrderSummary';
import Navbar from '../layouts/Navbar'
//redux
import * as Actions from '../../Redux/actions/Actions'
import { useSelector, useDispatch } from 'react-redux';
function Cart() {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.user_data.user_orders)
    const removeItemFromCart = (id) => {
        const res = orders?.filter(order => order?._id !== id)
        dispatch(Actions.user_orders(res));
    }
    return (
        <>
            <Navbar />
            <Container>
                {orders?.length > 0 ? orders?.map((order, index) => <Card key={index} order={order} removeItemFromCart={removeItemFromCart} />)
                    : (<h1 className='text-center main-color my-5'>No Orders In Cart</h1>)}
                {orders?.length !== 0 && <OrderSummary orders={orders} />}
            </Container>
           
        </>
    )
}
export default Cart