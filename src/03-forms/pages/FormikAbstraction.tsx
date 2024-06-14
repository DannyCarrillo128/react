import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

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
                                      .max(15, 'Firstname must have less than 15 characters.'),
                lastname: Yup.string()
                                      .required('Mandatory field.')
                                      .max(10, 'Lastname must have less than 10 characters.'),
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
              <MyTextInput label='Firstname' name="firstname" placeholder="John"/>
              <br/>

              <MyTextInput label='Lastname' name="flastname" placeholder="Doe"/>
              <br/>

              <MyTextInput label='Email' name="email" type="email" placeholder="johndoe@email.com"/>
              <br/>

              <MySelect label="Occupation" name="occupation">
                <option value="">Select an option</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-jr">IT Junior</option>
                <option value="it-sr">IT Senior</option>
              </MySelect>
              <br/>

              <MyCheckbox label="Terms & conditions" name="terms"/>
              <br/>
      
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )

};
