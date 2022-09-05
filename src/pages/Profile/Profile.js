import React, { useState, useEffect } from 'react'
//components
import Navbar from '../layouts/Navbar'
//api request
import { public_request } from '../../util/requestMethods'
//redux 
import { useSelector } from 'react-redux'
import ProfileHeader from '../../components/Profile/ProfileHeader';
import AccountInfo from '../../components/Profile/AccountInfo';
import MyOrders from '../../components/Profile/MyOrders';
function Profile() {
    const user = useSelector(state => state.user_data.user);
    const [orders, setOrders] = useState([]);
    const getUserOrders = async () => {
        await public_request.get('users/get-order')
            .then(response => setOrders(response.data))
            .catch(err => console.error(err))
    }
    useEffect(() => {
        getUserOrders()
    }, [user])
    return (
        <div>
            <Navbar />
            <ProfileHeader user={user} />
            <AccountInfo user={user} />
            <MyOrders orders={orders} />
        </div>
    )
}

export default Profile