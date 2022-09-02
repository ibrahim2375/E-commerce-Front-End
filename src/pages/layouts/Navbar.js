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
                        <Navbar.Brand href="#">OHS</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    OSH
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
                                        <NavDropdown.Item href="#action3">Laptops</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Watches</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Phones</NavDropdown.Item>
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