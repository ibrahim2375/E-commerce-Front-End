import React, { useState } from 'react'
//success message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//bootstrap components
import Form from 'react-bootstrap/Form';
// import * as yup from 'yup';
//api request
import { public_request } from '../../util/requestMethods'
//functions 
import { registerFormSchema } from './HandleFunctions'
const initialValue = {
    name: '',
    email: '',
    password: '',
    address: '',
    number: '',
    // confirm_password: ''
}
function RegisterForm() {
    const [formErrors, setFormErrors] = useState('');
    const [formValues, setFormValues] = useState(initialValue);
    const [disable, setDisable] = useState(false);

    ///get values 
    const handleData = async (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // some errors here
        // await yup.reach(registerFormSchema, name)
        //     .validate(value)
        //     .then((valid) => {
        //         setFormErrors({ ...formErrors, [name]: '' });
        //         if (valid.errors.length === 0) {
        //             setDisable(false);
        //         }
        //     }).catch((err) => {
        //         setDisable(true);
        //         setFormErrors({ ...formErrors, [name]: err.errors })
        //     })

    }

    //submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        registerFormSchema.validate(formValues)
            .catch((err) => {
                setFormErrors(err.message);
            }).then(async (valid) => {
                if (valid) {
                    setFormErrors('');
                    await public_request.post('users/auth/create', { ...formValues })
                        .then(response => {
                            toast.success(response?.data?.message, {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            setFormValues(initialValue);
                            // setDisable(true);
                        })
                        .catch(err => {
                            toast.error(err?.response?.data?.message, {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        })
                }
            })

    }
    return (
        <Form>
            <h1>Create an Account</h1>
            <Form.Text>
                Your personal data will be used to support your
                experience throughout this website,
                to manage access to your account.
            </Form.Text>
            <br />
            <p className="text-danger">{formErrors}</p>
            <Form.Group className="mb-3" controlId="formBasicUsernameR">
                <Form.Control type="text" placeholder="username" name="name" className='rounded-5' value={formValues.name} onChange={handleData} />
                {/* <Form.Label className="text-danger">{formErrors.name}</Form.Label> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmailR">
                <Form.Control type="email" placeholder="Enter email" name="email" className='rounded-5' value={formValues.email} onChange={handleData} />
                {/* <Form.Label className="text-danger">{formErrors.email}</Form.Label> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordR">
                <Form.Control type="password" placeholder="Password" name="password" className='rounded-5' value={formValues.password} onChange={handleData} />
                {/* <Form.Label className="text-danger">{formErrors.password}</Form.Label> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmR">
                <Form.Control type="text" placeholder="number" name="number" className='rounded-5' value={formValues.number} onChange={handleData} />
                {/* <Form.Label className="text-danger">{formErrors.number}</Form.Label> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmR">
                <Form.Control type="text" placeholder="address" name="address" className='rounded-5' value={formValues.address} onChange={handleData} />
                {/* <Form.Label className="text-danger">{formErrors.address}</Form.Label> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to terms and Policy." />
            </Form.Group>
            <button disabled={disable} className='main-btn' type="submit" onClick={handleSubmit}>Register</button>
            {/* toast container */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            {/* toast container */}
        </Form>
    );
}

export default RegisterForm;