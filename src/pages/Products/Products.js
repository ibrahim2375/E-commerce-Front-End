import React, { useState, useEffect } from 'react'
//components
import Navbar from '../layouts/Navbar'
// import Search from '../../components/Products/Search'
import FilterProducts from '../../components/Products/FilterProducts'
import ProductModel from '../layouts/ProdectModel'
//bootstrap components
import Container from 'react-bootstrap/Container';
//api request
import { public_request } from '../../util/requestMethods'
import { useLocation } from 'react-router-dom'
//product model skeleton
import ProductModelSkeleton from '../../Skeleton/components/layouts/ProductModel_Skeleton';
// redux 
// import { useSelector } from 'react-redux'


function Products() {
    // const products = useSelector(state => state.products_data.products);
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [filterdProducts, setFilterdProducts] = useState([])
    const [filterd, setFilterd] = useState({})
    const [loading, setLoading] = useState(false);
    // const [query, setQuery] = useState('');
    const handelSelectChange = (e) => {
        const value = e.target.value;
        setFilterd({ ...filterd, [e.target.name]: value })
    }
    // const handleSearch = (value) => {
    //     setQuery(value);
    // }
    useEffect(() => {
        // get all products
        const getProducts = async () => {
            setLoading(true)
            await public_request.get(!location.search ? `products/get` : `products/get?category=${location.search.replace('?', '')}`)
                .then((res) => {
                    setProducts(res.data);
                    setLoading(false);
                })
                .catch((err) => console.log(err))
        }
        getProducts()
    }, [location])

    useEffect(() => {
        // get all filtered
        filterd && setFilterdProducts(products?.filter(product =>
            product?.avilableSizes.includes(filterd?.size)
            || product?.avilableColors.includes(filterd?.color)
            || product?.type === filterd?.type
            // || (product?.name).toLowerCase() === (query).toLowerCase()
            // || ((product?.name).toLowerCase()).search(query.toLowerCase()) !== -1
        ))
    }, [products, filterd])
    return (
        <>
            <Navbar />
            <Container>
                {/* <Search handleSearch={handleSearch} /> */}
                <h1 className="display-5">Filter Products</h1>
                <FilterProducts handelSelectChange={handelSelectChange} />
                {/* products */}
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 my-5">
                    {loading ? (Array.from({ length: 10 }).map((s, i) => <ProductModelSkeleton key={i}/>))
                        : (filterdProducts.length !== 0 ? filterdProducts.map((product, i) => (
                            <ProductModel key={i} product={product} />
                        )) : products.map((product, i) => (
                            <ProductModel key={i} product={product} />
                        )))
                    }
                </div>
                {/* products */}
            </Container>
        </>
    )
}

export default Products