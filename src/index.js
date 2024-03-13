import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/webpages/Home';
import Product from './Pages/webpages/Product';
import ProductDetails from './Pages/webpages/ProductDetails';
import LogIn from './Pages/webpages/LogIn';
import Register from './Pages/webpages/Register';
import ContactUs from './Pages/webpages/ContactUs';
import Cart from './Pages/webpages/Cart';
import Profile from './Pages/webpages/Profile';
import EditProfile from './Pages/webpages/EditProfile';
import AdminPage from './Pages/adminpages/AdminPage';
import Addproduct from './Pages/adminpages/Addproduct';
import Addcategory from './Pages/adminpages/Addcategory';
import AddSlider from './Pages/adminpages/AddSlider';
import AddsubCategory from './Pages/adminpages/AddsubCategory';
import Viewproduct from './Pages/adminpages/Viewproduct';
import Viewcategory from './Pages/adminpages/Viewcategory';
import ViewSlider from './Pages/adminpages/ViewSlider';
import ViewsubCategory from './Pages/adminpages/ViewsubCategory';
import ViewUser from './Pages/adminpages/ViewUser';
import AdminLogin from './Pages/adminpages/AdminLogin';
import MainContext from './Context/MainContext';


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
    element: <LogIn />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/contact-us',
    element: <ContactUs />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/edit-profile',
    element: <EditProfile />
  },
  {
    path: '/edit-profile',
    element: <EditProfile />
  },
  {
    path: "/admin-login",
    element: <AdminLogin />
  },
  {
    path: "/admin-page",
    element: <AdminPage />
  },
  {
    path: "/add-product",
    element: <Addproduct />
  },
  {
    path: "/add-category",
    element: <Addcategory />
  },
  {
    path: "/add-slider",
    element: <AddSlider />
  },
  {
    path: "/add-subcategory",
    element: <AddsubCategory />
  },
  {
    path: "/view-product",
    element: <Viewproduct />
  },
  {
    path: "/view-category",
    element: <Viewcategory />
  },
  {
    path: "/view-slider",
    element: <ViewSlider />
  },
  {
    path: "/view-subcategory",
    element: <ViewsubCategory />
  },
  {
    path: "/view-user",
    element: <ViewUser />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContext>
      <RouterProvider router={router} />
    </MainContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
