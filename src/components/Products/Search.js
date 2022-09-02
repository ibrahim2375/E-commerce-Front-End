import React from 'react'
//bootstrap components
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//mui Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Search({ handleSearch }) {

    return (
        <InputGroup className="my-3">
            <Form.Control
                placeholder="Search by Product Name"
                aria-label="Search by Product Name"
                aria-describedby="basic-addon2"
                name='search'
                onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="main-btn" id="button-addon2" >
                <SearchOutlinedIcon />
            </button>
        </InputGroup>

    )
}

export default Search