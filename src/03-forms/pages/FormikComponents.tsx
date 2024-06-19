import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
              initialValues={ {
                firstname: '',
                lastname: '',
                email: '',
                occupation: '',
                terms: false
              } }
              onSubmit={ (values) => console.log(values) }
              validationSchema={ Yup.object({
                firstname: Yup.string()
                                      .required('Mandatory field.')
                                      .max(15, 'Firstname must be less than 15 characters.'),
                lastname: Yup.string()
                                      .required('Mandatory field.')
                                      .max(10, 'Lastname must be less than 10 characters.'),
                email: Yup.string()
                                   .required('Mandatory field.')
                                   .email('Invalid email address.'),
                occupation: Yup.string()
                                        .required('Mandatory field.')
                                        .notOneOf([ 'it-jr' ], 'This option is not allowed.'),
                terms: Yup.boolean()
                                    .oneOf([ true ], 'You must agree terms and conditions.')
              }) }>
        { (formik) => (
            <Form>
              <label htmlFor="firstname">Firstname</label>
              <Field type="text" name="firstname" />
              <ErrorMessage name="firstname" component="span" />
              <br/>
      
              <label htmlFor="lastname">Lastname</label>
              <Field type="text" name="lastname" />
              <ErrorMessage name="lastname" component="span" />
              <br/>
      
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" />
              <br/>

              <label htmlFor="occupation">Occupation</label>
              <Field name="occupation" as="select">
                <option value="">Select an option</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-jr">IT Junior</option>
                <option value="it-sr">IT Senior</option>
              </Field>
              <ErrorMessage name="occupation" component="span" />
              <br/>

              <label>
                <Field type="checkbox" name="terms" />
                Terms and conditions
              </label>
              <ErrorMessage name="terms" component="span" />
              <br/>
      
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )

};
