import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
    name: yup.string()
        .min(4, "please write your full name")
        .max(28, "your name too long!")
        .required("name required"),
    email: yup.string()
        .required("Email required").email(),
    password: yup.string().required("Password required")
        .min(6, "Password too can not be less than 6 characters")
        .max(28, "Password too long!"),
    // confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
    address: yup.string()
        .required("address required")
        .min(10, "address too short")
        .max(50, "address too long!"),
    number: yup.string()
        .required("number required")
        .min(11, "incorrect number")
        .max(12, "incorrect number")
});

export const loginFormSchema = yup.object({
    password: yup.string()
        .required("Password required")
        .min(2, "Password too short")
        .max(28, "Password too long!"),
    email: yup.string()
        .required("Email required"),
});

