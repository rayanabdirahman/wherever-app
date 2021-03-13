import * as yup from 'yup';

export const AccountValidator = {
  email: yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required')
  }),
  name: yup.object().shape({
    name: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required')
  }),
  username: yup.object().shape({
    username: yup.string().required('Username is required')
  }),
  password: yup.object().shape({
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required')
  })
};
