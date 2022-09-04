import React from 'react'
//bootstrap components
import Form from 'react-bootstrap/Form';

function SingleProductColor({ colors, handelSelectChange }) {
  return (
    <div className="d-flex gap-5 mb-2">

      <h1 className='display-6'>Color:</h1>
      {
        colors?.length !== 0  ? (
          <Form.Select aria-label="Default select example" name="color" onChange={(e) => handelSelectChange(e)}>
            <option disabled>Color</option>
            {colors?.map((color) => <option key={color} value={`${color}`}>{color.toUpperCase()}</option>)}
          </Form.Select>) : null
      }

    </div>
  )
}

export default SingleProductColor