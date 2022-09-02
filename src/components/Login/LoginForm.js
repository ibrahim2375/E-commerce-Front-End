import React, { useState } from 'react'
//bootstrap components
import Form from 'react-bootstrap/Form';
//functions 
import { loginFormSchema } from './HandleFunctions'
//redux
import { useDispatch } from 'react-redux'
import * as Actions from '../../Redux/actions/Actions'
import { public_request } from '../../util/requestMethods'
// navigate
// import { useNavigate } from 'react-router-dom'
function LoginForm() {
    const dispatch = useDispatch();
    // const Navigate = useNavigate();
    const [errors, setErrors] = useState('')
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });
    ///get values 
    const handleData = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }
    //submit form login
    const handleSubmit = async (e) => {
        e.preventDefault();
        loginFormSchema.validate(formValues)
            .catch((err) => {
                setErrors(err.message);
            }).then(async (valid) => {
                if (valid) {
                    await public_request.post('users/auth/login', {
                        email: formValues.email,
                        password: formValues.password
                    }).then(response => {
                        if (!response?.data) {
                            setErrors('somthing wrong');
                        } else {
                            setErrors(null);
                            dispatch(Actions.get_user(response?.data, true));
                            // Navigate('/');
                            console.log(response.data);
                        }
                    }).catch(err => { setErrors(err?.response?.data?.message) })
                }
            });
    }
    return (
        <Form >
            <h1>Login</h1>
            <Form.Label className="text-danger">{errors}</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmailL">
                <Form.Control type="email" placeholder="Enter email" className='rounded-5' name="email" onChange={handleData} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordL">
                <Form.Control type="password" placeholder="Password" className='rounded-5' name="password" onChange={handleData} />
            </Form.Group>
            <button className='main-btn' type="submit" onClick={handleSubmit} >Login</button>
        </Form>

    );
}

export default LoginForm;