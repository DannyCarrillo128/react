import { FormEvent } from 'react';

import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

  const { formData, isValidEmail, onChange, reset, name, email, password, password2 } = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  // const { name, email, password, password2 } = formData; // Alternative form

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // This prevent refresh current page
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={ onSubmit }>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={ name }
          onChange={ onChange }
          className={ `${ name.trim().length <= 0 && 'has-error' }` } />
        { name.trim().length <= 0 && <span>Mandatory field.</span> }
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ onChange }
          className={ `${ !isValidEmail(email) && 'has-error' }` } />
        { !isValidEmail(email) && <span>This is not a valid email.</span> }
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={ password }
          onChange={ onChange } />
        { password.trim().length <= 0 && <span>Mandatory field.</span> }
        { password.trim().length < 6 && password.trim().length > 0 && <span>Password must have at least 6 characters.</span> }
        <input
          type="password"
          name="password2"
          placeholder="Repeat password"
          value={ password2 }
          onChange={ onChange } />
        { password2.trim().length <= 0 && <span>Mandatory field.</span> }
        { password2.trim().length > 0 && password !== password2 && <span>Passwords do not match.</span> }
        <button type="submit">Create</button>
        <button type="button" onClick={ reset }>Clear</button>
      </form>
    </div>
  )

};
