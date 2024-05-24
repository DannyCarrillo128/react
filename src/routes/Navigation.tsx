import { createBrowserRouter, Navigate, NavLink, Outlet, RouterProvider } from 'react-router-dom';

import logo from '../logo.svg';

import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

function Root() {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={ logo } alt="React Logo"/>
          <ul>
            <li>
              <NavLink to="/home"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users"
                       className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
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
      { path: 'home', element: <ShoppingPage/> },
      { path: 'about', element: <h1>About</h1> },
      { path: 'users', element: <h1>Users</h1> },
      { path: '/*', element: <Navigate to="home" replace></Navigate> }
    ]
  }
]);

export const Navigation = () => {

  return (
    <RouterProvider router={ router } />
  );

};
