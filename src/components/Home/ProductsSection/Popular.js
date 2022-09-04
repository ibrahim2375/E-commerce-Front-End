import React, { useState, useEffect } from 'react'
//product model
import ProductModel from '../../../pages/layouts/ProdectModel'
//util api 
import { public_request } from '../../../util/requestMethods'
//product model skeleton
import ProductModelSkeleton from '../../../Skeleton/components/layouts/ProductModel_Skeleton';

function Popular() {
    const [popularProducts, setPopularProducts] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // get all products
        const getProducts = async () => {
            setLoading(true)
            await public_request.get(`products/get/sample/popular`)
                .then((res) => {
                    setPopularProducts(res.data)
                    setLoading(false)
                })
                .catch((err) => console.log(err))
        }
        getProducts()
    }, [])
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            {loading ? (Array.from({ length: 10 }).map((s, i) => <ProductModelSkeleton key={i} />))
                : (popularProducts.map((product, i) => (
                    <ProductModel key={i} product={product} />
                )))
            }
        </div>
    )
}
export default Popular