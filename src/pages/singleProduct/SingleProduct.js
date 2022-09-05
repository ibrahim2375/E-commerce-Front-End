import React, { useEffect, useState } from 'react'
//components
import NavBar from '../layouts/Navbar';
import SingleProductData from '../../components/singleProduct/SingleProductData'
import SingleProductImg from '../../components/singleProduct/SingleProductImg'
// bootstrap.component
import Container from 'react-bootstrap/Container';
//params
import { useParams } from 'react-router-dom'
// api
import { public_request } from '../../util/requestMethods'
//import SingleProduct_skeleton
import SingleProductDataSkeleton from '../../Skeleton/components/SingleProduct/SingleProductData_skeleton'
import SingleProductImgSkeleton from '../../Skeleton/components/SingleProduct/SingleProductImg_skeleton'
// css
import '../../css/SingleProduct.css'
//redux 
// import { useSelector } from 'react-redux'

function SingleProduct() {
    // const products = useSelector(state => state.products_data.products);
    const param = useParams();
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getProduct = async _ => {
            setLoading(true)
            await public_request.get(`product/get/${param.id}`)
                .then(res => {
                    setProduct(res.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }
        getProduct();
    }, [param.id]);

    return (
        <>
            <NavBar />
            <Container className='single-product-page w-100 my-3'>
                {loading ?
                    (
                        <>
                            <SingleProductImgSkeleton />
                            <SingleProductDataSkeleton />
                        </>
                    )
                    : (
                        <>
                            <SingleProductImg product={product} />
                            <SingleProductData product={product} />
                        </>
                    )}

            </Container>
        </>
    )
}
export default SingleProduct