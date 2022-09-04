import React, { useState, useEffect } from 'react'
//bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
//Link
import { Link } from 'react-router-dom';
//mui icons  
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//api request 
import { public_request } from '../../util/requestMethods';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Trend() {
    const [trendProducts, setTrendProducts] = useState([])

    useEffect(() => {
        // get most views products
        const getProducts = async () => {
            await public_request.get(`products/get/most-views`)
                .then((res) => setTrendProducts(res.data))
                .catch((err) => console.log(err))
        }
        getProducts()
    }, [])
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {trendProducts.length !== 0 ? trendProducts.map(trend => (
                    <Col key={trend._id} >
                        <Card className="most-popular-card position-relative  d-flex justify-content-center  align-items-center" style={{ height: '400px' }}>
                            <Card.Img src={`/assets/uploads/${trend.img}`} className='h-100 w-100 position-absolute top-0 left-0' style={{ objectFit: 'contain' }} />
                            <div style={{ zIndex: '1' }} className='d-flex'>
                                <Link to={`/products?${trend.category}`} className="btn-over mx-1 link"><SearchOutlinedIcon /></Link>
                                <div className='btn-bg rounded center'> <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></div>
                                {/* <Link to={`/product/${trend._id}`} className="btn-over mx-1 link"><FavoriteBorderOutlinedIcon /></Link> */}
                                <Link to={`/product/${trend._id}`} className="btn-over mx-1 link"><ShoppingCartOutlinedIcon /></Link>
                            </div>
                        </Card>
                    </Col>
                )) : ('')}
            </Row>
        </Container>
    )
}

export default Trend




