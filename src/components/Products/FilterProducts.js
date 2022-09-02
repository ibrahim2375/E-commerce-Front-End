import React from 'react'
// bootstrap components
import Form from 'react-bootstrap/Form';

function FilterProducts({ handelSelectChange }) {

    return (
        <div className="d-flex justify-content-sm-between align-items-center gap-3">
            <div className="d-flex justify-content-center align-items-center gap-4">
                <Form.Select aria-label="Default select example" name="size" onChange={(e) => handelSelectChange(e)}>
                    <option disabled >Size</option>
                    <option value="sm">SM</option>
                    <option value="md">MD</option>
                    <option value="lg">LG</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>

                </Form.Select>
                <Form.Select aria-label="Default select example" name="color" onChange={(e) => handelSelectChange(e)}>
                    <option disabled >Colors</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="yellow">Yellow</option>
                </Form.Select>
            </div>
            <div className="filter-type">
                <Form.Select aria-label="Default select example" name="type" onChange={(e) => handelSelectChange(e)}>
                    <option disabled >Type</option>
                    <option value="new">Added New</option>
                    <option value="feature">Feature</option>
                    <option value="popular">Popular</option>
                </Form.Select>
            </div>
        </div>
    )
}

export default FilterProducts