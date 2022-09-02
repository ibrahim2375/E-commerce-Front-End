import React from 'react'
//bootstrap components
import Form from 'react-bootstrap/Form';
function SingleProductSize({ sizes, handelSelectChange }) {
    return (
        <div className="d-flex gap-5 mb-2">
            <h1 className='display-6'>Size:</h1>
            {
                sizes?.length !== 0 ? (
                    <Form.Select aria-label="Default select example" name="size" onChange={(e) => handelSelectChange(e)}>
                        <option disabled >Size</option>
                        {
                            sizes?.map((size) => <option key={size} value={`${size}`}>{size.toUpperCase()}</option>)
                        }
                    </Form.Select>
                ) : null
            }

        </div>
    )
}

export default SingleProductSize