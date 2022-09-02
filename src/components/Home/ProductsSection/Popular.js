import React, { useState, useEffect } from 'react'
//product model
import ProductModel from '../../../pages/layouts/ProdectModel'
//util api 
import { public_request } from '../../../util/requestMethods'
function Popular() {
    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {
        // get all products
        const getProducts = async () => {
            await public_request.get(`products/get/sample/popular`)
                .then((res) => setPopularProducts(res.data))
                .catch((err) => console.log(err))
        }
        getProducts()
    }, [])
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            {popularProducts.map((product, i) => (
                <ProductModel key={i} product={product} />
            ))}
        </div>
    )
}
export default Popular