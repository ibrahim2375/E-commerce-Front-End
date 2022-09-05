//router link 
import { Link } from 'react-router-dom'
//mui  icons
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//css  
import '../../css/ProductModel.css'
function Prodect({ product }) {
    return (
        <section className="product-card" >
            <Link to={`/product/${product._id}`}  >
                <div className="product-card-head">
                    <span style={{ backgroundColor: 'green' }} className="state">{product.state}</span>
                    <img src={`/assets/uploads/${product?.img}`} alt="" /> 
                </div>
            </Link>
            <div className="product-card-content">
                <div className="content-head">
                    <p className="text-muted">{product.category}</p>
                    <h4>{product.name}</h4>
                </div>
                <hr />
                <div className="evaluation">
                    <Rating name="read-only" value={product.TotalReviewStars} readOnly />
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


