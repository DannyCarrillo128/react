import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
              initialValues={ {
                username: '',
                email: '',
                password: '',
                password2: ''
              } }
              onSubmit={ (values) => console.log(values) }
              validationSchema={ Yup.object({
                username: Yup.string()
                                      .required('Mandatory field.')
                                      .min(2, 'Username must be at least 2 characters.')
                                      .max(15, 'Username must be less than 15 characters.'),
                email: Yup.string()
                                    .required('Mandatory field.')
                                    .email('Invalid email address.'),
                password: Yup.string()
                                      .required('Mandatory field.')
                                      .min(6, 'Password must be at least 6 characters.'),
                password2: Yup.string()
                                      .required('Mandatory field.')
                                      .oneOf([Yup.ref('password')], 'Passwords do not match.')
              }) }>
        { ({ handleReset }) => (
            <Form>
              <MyTextInput label='Username' name="username" />
              <br/>

              <MyTextInput label='Email' name="email" type="email" />
              <br/>

              <MyTextInput label='Password' name="password" type="password" />
              <br/>

              <MyTextInput label='Repeat password' name="password2" type="password" />
              <br/>

              <button type="submit">Submit</button>
              <button type="button" onClick={ handleReset }>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )

};
