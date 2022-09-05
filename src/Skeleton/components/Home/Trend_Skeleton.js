//bootstrap components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
//Link
import { Link } from 'react-router-dom';
//mui icons  
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//skeleton 
import Skeleton from '@mui/material/Skeleton';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Trend_component() {
    return (
        <Col  >
            <Card className="most-popular-card position-relative  d-flex justify-content-center  align-items-center" style={{ height: '400px' }}>
                <div className='h-100 w-100 position-absolute top-0 left-0' style={{ objectFit: 'contain' }}>
                    <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />
                </div>
                <div style={{ zIndex: '1' }} className='d-flex'>
                    <Link to={`/products`} className="btn-over mx-1 link"><SearchOutlinedIcon /></Link>
                    <div className='btn-bg rounded center'> <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /></div>
                    <Link to={`/`} className="btn-over mx-1 link"><ShoppingCartOutlinedIcon /></Link>
                </div>
            </Card>
        </Col>
    )
}

export default Trend_component