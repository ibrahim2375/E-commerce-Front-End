import React, { useEffect } from 'react'
//router 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import SingleProduct from './pages/singleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux'
import NotFound from './pages/404/NotFound';
import Profile from './pages/Profile/Profile';
function App() {
    const user_state = useSelector(state => state.user_data.user_state);
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/product/:id' element={<SingleProduct />} />
                <Route path='/cart' element={user_state ? <Cart /> : <Navigate to='/login' replace />} />
                <Route path='/login' element={user_state ? <Navigate to='/' replace /> : <Login />} />
                <Route path='/profile' element={user_state ? <Profile /> : <Navigate to='/' replace /> } />
                <Route path='*' element={<NotFound />} />
            </Routes >
        </Router>
    );
}
export default App;
