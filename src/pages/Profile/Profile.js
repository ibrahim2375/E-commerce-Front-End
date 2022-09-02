import React from 'react'
//components
import Navbar from '../layouts/Navbar'
//redux 
import { useSelector } from 'react-redux'
import ProfileHeader from '../../components/Profile/ProfileHeader';
import AccountInfo from '../../components/Profile/AccountInfo';
function Profile() {
    const user = useSelector(state => state.user_data.user);
    return (
        <div>
            <Navbar />
            <ProfileHeader user={user} />
            <AccountInfo user={user} />
        </div>
    )
}

export default Profile