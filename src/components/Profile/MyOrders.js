//Link 
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
// mui icons
import CircleIcon from '@mui/icons-material/Circle';
//time TimeAgo
import TimeAgo from 'react-timeago'
import enStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(enStrings);
function MyOrders({ orders }) {
    return (
        <Container className='my-5 d-flex justify-content-center align-items-center flex-column gap-5 '>
            <h1 className='main-color display-6'>My Orders : </h1>
            {
                orders?.length !== 0 ? orders?.map((order, i) => (
                    <div className='d-flex justify-content-between align-items-center shadow rounded px-2 w-100' key={i}>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <Link to={`/product/${order?.productId}`}>
                                <img src={`${process.env.REACT_APP_BD_SITE}/assets/uploads/${order?.img}`} style={{ width: '100px', height: '100px', objectFit: 'contain' }} alt="" />
                            </Link>
                            <div>
                                <p>{order?.name}</p>
                                <p className='text-muted' style={{ fontSize: '10px' }}> < TimeAgo date={`${order?.createdAt}`} formatter={formatter} /></p>
                                 {order?.color ? <p><CircleIcon sx={{ color: order?.color }} /></p> : null}
                                {order?.size ? <p>{order?.size}</p> : null}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-start flex-column'>
                            <p className='main-color'>{order?.quantity}</p>
                            <p className='main-color'>${order?.price}</p>
                            <div className="div">
                                <p className='main-color flex-column'>
                                    {order?.accept === true ? <span className='text-success'>Accepted 😃 </span> : <span className='text-warning'>Waiting...</span>}
                                </p> <p className='main-color flex-column'>
                                    {order?.arrived === true ? <span className='text-dark'>Delivered 🉑 </span> : <span className='text-warning'>Delivery in progress.</span>}
                                </p>
                            </div>
                        </div>
                    </div>

                )) : null
            }

        </Container>
    )
}

export default MyOrders