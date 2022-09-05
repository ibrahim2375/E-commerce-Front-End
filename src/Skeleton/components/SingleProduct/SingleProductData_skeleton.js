import React from 'react'
// skeleton components
import Skeleton from '@mui/material/Skeleton';
function SingleProduct_skeleton() {
    return (
        <div className="main-data d-flex justify-content-center align-items-start flex-column gap-3 w-100 h-100" style={{ flex: '.5' }}>
            <Skeleton width="40%" animation="wave" />
            <div className='d-flex justify-content-between w-100'>
                <Skeleton width="20%" animation="wave" />
                <Skeleton width="20%" animation="wave" />
            </div>
            <Skeleton variant="rectangular" width="100%" height={100} animation="wave" />
            <Skeleton width="20%" animation="wave" />
            <div>
                <Skeleton width={100} height={70} animation="wave" />
                <Skeleton width={100} height={70} animation="wave" />
            </div>
            <div className="d-flex justify-content-around align-items-center w-100">
                <Skeleton width="20%"  animation="wave" />
                <Skeleton width={20}  animation="wave" />
                <Skeleton width={90} height={40} animation="wave" />
            </div>
        </div>
    )
}

export default SingleProduct_skeleton