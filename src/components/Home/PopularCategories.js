import React from 'react'
//bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
//icons    
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//json 
import populars from '../../json/popular.json'

function PopularCategories() {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {populars.map(popular => (
                    <Col key={popular.id} >
                        <Card className="most-popular-card position-relative  d-flex justify-content-center  align-items-center" style={{ height: '400px' }}>
                            <Card.Img src={popular.img} className='h-100 w-100 position-absolute top-0 left-0' style={{ objectFit: 'contain' }} />
                            <div style={{ zIndex: '1' }}>
                                <button className="btn-over mx-1"><SearchOutlinedIcon /></button>
                                <button className="btn-over mx-1"><FavoriteBorderOutlinedIcon /></button>
                                <button className="btn-over mx-1"><ShoppingCartOutlinedIcon /></button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default PopularCategories




