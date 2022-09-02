import React, { useState, useEffect } from 'react'
//components
import Navbar from '../layouts/Navbar'
import Search from '../../components/Products/Search'
import FilterProducts from '../../components/Products/FilterProducts'
import ProductModel from '../layouts/ProdectModel'
//bootstrap components
import Container from 'react-bootstrap/Container';
//api request
import { public_request } from '../../util/requestMethods'
// redux 
// import { useSelector } from 'react-redux'


function Products() {
    // const products = useSelector(state => state.products_data.products);
    const [products, setProducts] = useState([]);
    const [filterdProducts, setFilterdProducts] = useState([])
    const [filterd, setFilterd] = useState({})
    const [query, setQuery] = useState('');

    const handelSelectChange = (e) => {
        const value = e.target.value;
        setFilterd({ ...filterd, [e.target.name]: value })
    }
    const handleSearch = (value) => {
        setQuery(value);
    }
    useEffect(() => {
        // get all products
        const getProducts = async () => {
            await public_request.get(`products/get`)
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => console.log(err))
        }
        getProducts()
    }, [])

    useEffect(() => {
        // get all filtered
        filterd && setFilterdProducts(products?.filter(product =>
            product?.avilableSizes.includes(filterd?.size)
            || product?.avilableColors.includes(filterd?.color)
            || product?.type === filterd?.type
            || (product?.name).toLowerCase() === (query).toLowerCase()
            // || ((product?.name).toLowerCase()).search(query.toLowerCase()) !== -1
        ))
    }, [products, filterd, query])
    return (
        <>
            <Navbar />
            <Container>
                <Search handleSearch={handleSearch} />
                <h1 className="display-5">Filter Products</h1>
                <FilterProducts handelSelectChange={handelSelectChange} />
                {/* products */}
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 my-5">
                    {filterdProducts.length !== 0 ? filterdProducts.map((product, i) => (
                        <ProductModel key={i} product={product} />
                    )) : products.map((product, i) => (
                        <ProductModel key={i} product={product} />
                    ))}
                </div>
                {/* products */}
            </Container>
        </>
    )
}

export default Products