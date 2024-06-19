import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
  firstname: string,
  lastname: string,
  email: string
}

export const FormikBasicPage = () => {

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.firstname) {
      errors.firstname = 'Mandatory field.'
    } else if (values.firstname.length > 15) {
      errors.firstname = 'Firstname must be less than 15 characters.';
    }

    if (!values.lastname) {
      errors.lastname = 'Mandatory field.'
    } else if (values.lastname.length > 10) {
      errors.lastname = 'Lastname must be less than 10 characters.';
    }

    if (!values.email) {
      errors.email = 'Mandatory field.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address.';
    }

    return errors;
  };

  const { errors, touched, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: ''
    },
    onSubmit: values => console.log(values),
    validate
  });

  return (
    <div>
      <h1>Formik Basics</h1>
      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" name="firstname" onBlur={ handleBlur } onChange={ handleChange } value={ values.firstname } />
        { touched.firstname && errors.firstname && <span>{ errors.firstname }</span> }
        <br/>

        <label htmlFor="lastname">Lastname</label>
        <input type="text" name="lastname" onBlur={ handleBlur } onChange={ handleChange } value={ values.lastname } />
        { touched.lastname && errors.lastname && <span>{ errors.lastname }</span> }
        <br/>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" onBlur={ handleBlur } onChange={ handleChange } value={ values.email } />
        { touched.email && errors.email && <span>{ errors.email }</span> }
        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  )

};
