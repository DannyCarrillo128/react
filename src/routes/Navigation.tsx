import { createBrowserRouter, Navigate, NavLink, Outlet, RouterProvider } from 'react-router-dom';

import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from '../03-forms/pages';

import logo from '../logo.svg';

function Root() {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo"/>
          <ul>
            <li>
              <NavLink to="/register"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basics"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basics</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      { path: 'register', element: <RegisterPage /> },
      { path: 'register-formik', element: <RegisterFormikPage /> },
      { path: 'dynamic-form', element: <DynamicForm /> },
      { path: 'formik-abstraction', element: <FormikAbstraction /> },
      { path: 'formik-basics', element: <FormikBasicPage /> },
      { path: 'formik-components', element: <FormikComponents /> },
      { path: 'formik-yup', element: <FormikYupPage /> },
      { path: '/*', element: <Navigate to="home" replace></Navigate> }
    ]
  }
]);

export const Navigation = () => {

  return (
    <RouterProvider router={ router } />
  );

};
