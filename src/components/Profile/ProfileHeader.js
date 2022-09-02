import React from 'react'
//mui icons
import Avatar from '@mui/material/Avatar'
function ProfileHeader({ user }) {
    return (
        <div className="profile-head ">
            <div className="bg-dark w-100 position-relative" style={{ height: '200px' }}>
                <div className="d-flex justify-content-center gap-5 align-items-center position-absolute" style={{ top: '70%', left: '10%' }}>
                    <Avatar sx={{ width: 90, height: 90 }} />
                    <div className="user_data">
                        <h1 className='main-color display-6'>{user?.name}</h1>
                        <p className='main-color text-muted '>{user?.email}</p>
                        <p className='main-color text-muted '>{user?.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileHeader