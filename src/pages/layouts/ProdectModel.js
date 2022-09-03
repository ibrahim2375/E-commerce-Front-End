import React, { useState } from 'react'
//router link 
import { Link } from 'react-router-dom'
//mui  icons
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//css  
import '../../css/ProductModel.css'
function Prodect({ product }) {
    const [stars] = useState([1, 2, 3, 4, 5])

    return (
        <section className="product-card" >
            <Link to={`/product/${product._id}`}  >
                <div className="product-card-head">
                    <span style={{ backgroundColor: 'green' }} className="state">{product.state}</span>
                    <img src={`${process.env.REACT_APP_API}img/${product?.img}`} alt="" />
                </div>
            </Link>
            <div className="product-card-content">
                <div className="content-head">
                    <p className="text-muted">{product.category}</p>
                    <h4>{product.name}</h4>
                </div>
                <hr />
                <div className="evaluation">
                    {stars.map((star, index) => <StarBorderOutlinedIcon sx={{ color: 'orange' }} key={index} />)}
                    <p>{product.views} views</p>
                </div>
                <div className="price">
                    <h3 className="main-color">{product.price}$</h3>
                    <Link to={`/product/${product._id}`} className="btn-over" >
                        <ShoppingCartOutlinedIcon />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Prodect


