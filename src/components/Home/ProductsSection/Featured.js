import React, { useState, useEffect } from 'react'
//product model
import ProductModel from '../../../pages/layouts/ProdectModel'
//util api 
import { public_request } from '../../../util/requestMethods'
function Featured() {
    const [featureProducts, setFeatureProducts] = useState([])

    useEffect(() => {
        // get all products
        const getProducts = async () => {
            await public_request.get(`products/get/sample/feature`)
                .then((res) => setFeatureProducts(res.data))
                .catch((err) => console.log(err))
        }
        getProducts()
    }, [])
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            {featureProducts.map((product, i) => (
                <ProductModel key={i} product={product} />
            ))}
        </div>
    )
}
export default Featured