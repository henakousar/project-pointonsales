import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // using for routing
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from './pages/homePage';
import ContactPage from './pages/contactPage';
import Dashboard from './pages/dashboard';
import Class3formPage from './pages/class3formPage';
import AddCategory from './pages/addCategory';
import AddProduct from './pages/addProduct';
import AddCustomer from './pages/addCustomer';
import ManageCustomer from './pages/manageCustomer';
import ManageProduct from './pages/manageProduct';
import EditCustomer from './pages/editCustomer';
import SignIn from './pages/signIn';
import RegistrationPage from './pages/registrationPage';
import ManageUser from './pages/manageUser';
import ManageCategory from './pages/manageCategory';
import EditCategory from './pages/editCategory';
import EditProduct from './pages/editProduct';

function App() {



  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/class3formPage' element={<Class3formPage/>} />
        <Route path='/addCategory' element={<AddCategory/>} />
        <Route path='/addProduct' element={<AddProduct/>} />
        <Route path='/addcustomer' element={<AddCustomer/>} />
        <Route path='/managecustomer' element={<ManageCustomer/>} />
        <Route path='/manageProduct' element={<ManageProduct/>} />
        <Route path='/editcustomer' element={<EditCustomer/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/manageuser' element={<ManageUser/>} />
        <Route path='/manageCategory' element={<ManageCategory/>} />
        <Route path='/editCategory' element={<EditCategory/>} />
        <Route path='/editProduct' element={<EditProduct/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
