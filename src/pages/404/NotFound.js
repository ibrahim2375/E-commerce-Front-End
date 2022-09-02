import React from 'react'
// mui icons
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
function NotFound() {
    return (
        <div className="vh-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <SentimentDissatisfiedOutlinedIcon sx={{ fontSize: 90 }} className='main-color' />
            <h1 className='main-color'>404</h1>
            <div className="d-flex gap-3">
                <p>Go Back To Home Page</p>
                <a href="/">Home</a>
            </div>
        </div>
    )
}
export default NotFound
