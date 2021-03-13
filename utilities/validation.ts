import * as yup from 'yup';

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
});

export const signInEmailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required')
});

export const signInPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
});

// export const signUpValidationSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email('Please enter valid email')
//     .required('Email Address is Required'),
//   name: yup
//     .string()
//     .matches(/(\w.+\s).+/, 'Enter at least 2 names')
//     .required('Full name is required'),
//   password: yup
//     .string()
//     .min(6, ({ min }) => `Password must be at least ${min} characters`)
//     .required('Password is required')
// });

export const signUpNameValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required')
});

export const signUpUsernameValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required')
});
