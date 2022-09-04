import React from 'react'
//router link 
import { Link } from 'react-router-dom'
//mui  icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// skeleton components
import SpinnerLoading from '../../SpinnerLoading'
import LineAnimation from '../../LineAnimation'

function ProductModel_Skeleton() {
    return (
        <section className="product-card" >
            <div className="product-card-head center">
                <SpinnerLoading />
            </div>
            <div className="product-card-content">
                <div className="product-content-head">
                    <LineAnimation width={2} />
                    <LineAnimation width={3} />
                </div>
                <hr />
                <div className="evaluation">
                    <LineAnimation width={5} />
                    <LineAnimation width={2} />
                </div>
                <div className="price">
                    <LineAnimation width={2} />
                    <Link to='/' className="btn-over" >
                        <ShoppingCartOutlinedIcon />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProductModel_Skeleton