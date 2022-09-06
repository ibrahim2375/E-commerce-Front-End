import React, { useState, useEffect } from 'react'
//api request
import { public_request } from '../../util/requestMethods'
//components
import Navbar from '../layouts/Navbar'
//redux 
import { useSelector } from 'react-redux'
import ProfileHeader from '../../components/Profile/ProfileHeader';
import AccountInfo from '../../components/Profile/AccountInfo';
import MyOrders from '../../components/Profile/MyOrders';
function Profile() {
    const [orders, setOrders] = useState([]);
    const user = useSelector(state => state?.user_data?.user);

    const getUserOrders = async () => {
        await public_request.post('users/get-order', {
            userId: user?._id
        }).then((response) => {
            if (response?.status === 200) {
                setOrders(response?.data)
            }
        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        getUserOrders();
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