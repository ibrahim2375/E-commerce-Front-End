import React from 'react'
//router link 
import { Link } from 'react-router-dom'
//mui  icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// skeleton components
import Skeleton from '@mui/material/Skeleton';
function ProductModel_Skeleton() {
    return (
        <section className="product-card" >
  
                <div className="product-card-head center w-100">
                    <Skeleton width={80} height={40} animation="wave" className="state" />
                    <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
                </div>

            <div className="product-card-content">
                <div className="content-head">
                    <Skeleton width="20%" animation="wave" />
                    <Skeleton width="50%" animation="wave" />
                </div>
                <hr />
                <div className="evaluation">
                    <Skeleton width="60%" animation="wave" />
                    <Skeleton width="30%" animation="wave" />
                </div>
                <div className="price">
                    <Skeleton  width="20%" animation="wave" />
                    <Link to='/' className="btn-over" >
                        <ShoppingCartOutlinedIcon />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProductModel_Skeleton