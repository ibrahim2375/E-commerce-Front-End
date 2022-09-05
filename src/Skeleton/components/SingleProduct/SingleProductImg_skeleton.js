import React from 'react'
// skeleton components
import Skeleton from '@mui/material/Skeleton';
function SingleProductImg_skeleton() {
  return (
      <div className="image center w-100 h-100">
          <Skeleton variant="rectangular" width="80%" height="50%" animation="wave" />
      </div>
  )
}

export default SingleProductImg_skeleton