import React, { useState, useEffect } from 'react'
//product model
import ProductModel from '../../../pages/layouts/ProdectModel'
//util api 
import { public_request } from '../../../util/requestMethods'
//product model skeleton
import ProductModelSkeleton from '../../../Skeleton/layouts/ProductModel_Skeleton';

function Featured() {
    const [featureProducts, setFeatureProducts] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // get all products
        const getProducts = async () => {
            setLoading(true)
            await public_request.get(`products/get/sample/feature`)
                .then((res) => {
                    setFeatureProducts(res.data)
                    setLoading(false)
                })
                .catch((err) => console.log(err))
        }
        getProducts()
    }, [])
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            {loading ? (Array.from({ length: 10 }).map((s, i) => <ProductModelSkeleton key={i} />))
                : (featureProducts.map((product, i) => (
                    <ProductModel key={i} product={product} />
                )))
            }
        </div>
    )
}
export default Featured