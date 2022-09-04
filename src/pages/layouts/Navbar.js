import { Link } from 'react-router-dom'
//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
//mui  icons 
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
//redux
import * as Actions from '../../Redux/actions/Actions'
import { useSelector, useDispatch } from 'react-redux';
// categories JSON
import categories from '../../json/categories.json'
function NavBar() {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.user_data.user_orders);
    const user_state = useSelector(state => state.user_data.user_state);
    const logOut = async () => {
        await dispatch(Actions.get_user([], false));
    }
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className='position-sticky w-100 top-0' style={{ zIndex: 999 }}>
                    <Container>
                        <Navbar.Brand href="/" className='center'><img src='logo.svg' alt='' width='30px' height='30px' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src='logo.svg' alt='logo' width='30px' height='30px' />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start align-items-md-center flex-grow-1 pe-3 gap-2 ">
                                    <Link to="/" className='link'>Home</Link>
                                    <Link to="/products" className='link'>Products</Link>
                                    <NavDropdown
                                        title="Categories"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        {categories.map(category =>
                                        (<div key={category.id}><Link to={`/products?${category.category}`} className='link ps-2'>{category.display}</Link>
                                            <NavDropdown.Divider /></div >)
                                        )}
                                        <Link to="/products" className='link ps-2'>All</Link>
                                    </NavDropdown>
                                </Nav>
                                <Nav className="justify-content-end align-items-md-center flex-grow-1 pe-3 gap-3">
                                    {!user_state ? (<Link to="/login" className='link'>Login</Link>) : (<button className='btn-over' onClick={logOut}>Logout</button>)}
                                    <Link to="/cart" className='link'>
                                        <Badge color="primary" badgeContent={orders?.length} showZero>
                                            <LocalGroceryStoreOutlinedIcon />
                                        </Badge>
                                    </Link>
                                    {user_state ? (<Link to="/profile" className='link'><Avatar /></Link>) : (null)}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBar;