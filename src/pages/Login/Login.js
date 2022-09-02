import React from 'react'
// bootstrap components
import Container from 'react-bootstrap/Container'
//components
import NavBar from '../layouts/Navbar'
import LoginForm from '../../components/Login/LoginForm'
import RegisterForm from '../../components/Login/RegisterForm'
//css 
import '../../css/Login.css'
function Login() {
    return (
        <div className="login-register">
            <NavBar />
            <Container className="login-register-forms  my-5">
                <div className="login">
                    <LoginForm />
                </div>
                <div className="register">
                    <RegisterForm />
                </div>
            </Container>
        </div>
    )
}

export default Login