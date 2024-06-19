import { Formik, Form } from 'formik';

import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components';
import customForm from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of customForm) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Mandatory field.');
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `${ input.label } must be at least ${ (rule as any).value || 2 } characters.`);
    }

    if (rule.type === 'email') {
      schema = schema.email('Invalid email address.');
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {

  return (
    <div>
      <h1>Dynamic Form</h1>
      
      <Formik
              initialValues={ initialValues }
              validationSchema={ validationSchema }
              onSubmit={ (values) => console.log(values) }>
        { () => (
            <Form noValidate>
              {
                customForm.map((field) => {
                  if (field.type === 'input' || field.type === 'email' || field.type === 'password') {
                    return  <MyTextInput
                                      key={ field.name }
                                      type={ (field.type as any) }
                                      label={ field.label }
                                      name={ field.name }
                                      placeholder={ field.placeholder } />
                  } else if (field.type === 'select') {
                    return  <MySelect
                                    key={ field.name }
                                    label={ field.label }
                                    name={ field.name }>
                              <option value="">Select an option</option>
                              {
                                field.options?.map(opt => (
                                  <option key={ opt.id } value={ opt.id }>{ opt.label }</option>
                                ))
                              }
                            </MySelect>
                  }
                  
                  throw new Error(`'${ field.type }' is a not supported type.`);
                })
              }
              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )

};