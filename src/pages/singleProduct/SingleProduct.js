import React, { useEffect, useState } from 'react'
// bootstrap.component
import Container from 'react-bootstrap/Container';
//components
import NavBar from '../layouts/Navbar'
import SingleProductData from '../../components/singleProduct/SingleProductData'
import SingleProductImg from '../../components/singleProduct/SingleProductImg'
// css
import '../../css/SingleProduct.css'
//redux 
// import { useSelector } from 'react-redux'
//params
import { useParams } from 'react-router-dom'
// api
import { public_request } from '../../util/requestMethods'
function SingleProduct() {
  const param = useParams();
  // const products = useSelector(state => state.products_data.products);
  const [product, setProduct] = useState({})
  useEffect(() => {
    const getProduct = async _ => {
      await public_request.get(`product/get/${param.id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }
    getProduct();
  }, [param.id])
  return (
    <>
      <NavBar />
      <Container className='single-product-page w-100 my-3'>
        <SingleProductImg product={product} />
        <SingleProductData product={product} />
      </Container>
      {/* <Footer /> */}
    </>
  )
}
export default SingleProduct