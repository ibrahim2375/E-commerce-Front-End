import React from 'react'
// bootstrap components
import Form from 'react-bootstrap/Form';
//json data 
import filterTools from '../../json/Filter_tools.json'
//animation framer motion
import { motion } from 'framer-motion'
function FilterProducts({ handelSelectChange }) {

    return (
        <motion.div className="d-flex justify-content-sm-between align-items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', duration: 1.3 }}
        >
            <div className="d-flex justify-content-center align-items-center gap-4">
                <Form.Select aria-label="Default select example" name="size" onChange={(e) => handelSelectChange(e)}>
                    <option disabled >Size</option>
                    {filterTools.sizes.map(size => <option value={size.size} key={size.id}>{size.display}</option>)}
                </Form.Select>
                <Form.Select aria-label="Default select example" name="color" onChange={(e) => handelSelectChange(e)}>
                    <option disabled >Colors</option>
                    {filterTools.colors.map(color => <option value={color.color} key={color.id}>{color.color}</option>)}
                </Form.Select>
            </div>
            <div className="filter-type">
                <Form.Select aria-label="Default select example" name="type" onChange={(e) => handelSelectChange(e)}>
                    <option disabled >Type</option>
                    {filterTools.types.map(type => <option value={type.type} key={type.id}>{type.display}</option>)}
                </Form.Select>
            </div>
        </motion.div>
    )
}

export default FilterProducts