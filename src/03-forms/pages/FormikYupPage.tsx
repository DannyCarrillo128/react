import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

  const { errors, touched, getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: ''
    },
    onSubmit: values => console.log(values),
    validationSchema: Yup.object({
      firstname: Yup.string()
                            .required('Mandatory field.')
                            .max(15, 'Firstname must have less than 15 characters.'),
      lastname: Yup.string()
                            .required('Mandatory field.')
                            .max(10, 'Lastname must have less than 10 characters.'),
      email: Yup.string()
                         .required('Mandatory field.')
                         .email('Invalid email address.')
    })
  });

  return (
    <div>
      <h1>Formik Yup</h1>
      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" { ...getFieldProps('firstname') } />
        { touched.firstname && errors.firstname && <span>{ errors.firstname }</span> }
        <br/>

        <label htmlFor="lastname">Lastname</label>
        <input type="text" { ...getFieldProps('lastname') } />
        { touched.lastname && errors.lastname && <span>{ errors.lastname }</span> }
        <br/>

        <label htmlFor="email">Email</label>
        <input type="email" { ...getFieldProps('email') } />
        { touched.email && errors.email && <span>{ errors.email }</span> }
        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )

};
