import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product',
    element: <Product />
  },
  {
    path: '/product-detail',
    element: <ProductDetails />
  },
  {
    path: '/login',
    element: <LogIn/>
  },
  {
    path: '/register',
    element: <Register/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
