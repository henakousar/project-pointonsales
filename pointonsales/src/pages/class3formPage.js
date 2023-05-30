import React from 'react';
import { useState, useEffect } from 'react';
import Nav from './nav';
import SideMenu from './sideMenu';
import TopBar from './topBar';

import { Formik } from 'formik';


function Class3formPage() {

    return (

        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="fixed" data-header-position="fixed">
            <SideMenu></SideMenu>

            {/* <!--  Main wrapper --> */}
            <div className="body-wrapper">
                <TopBar></TopBar>

                <div className="container-fluid">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title fw-semibold mb-4">Class3 Formik Example</h5>
                            <p className="mb-0">Formik https://formik.org/ </p>
                            <p>Step1 :  npm install formik --save</p>
                            <p>Step2:  import  Formik  from 'formik'; </p>

                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }


                                    if (!values.password) {
                                        errors.password = 'Required';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                   
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                    <form onSubmit={handleSubmit}>

                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Email</label>
                                            <input
                                            type="email"
                                            name="email"
                                            className="form-control" 
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            />
                                        {errors.email && touched.email && errors.email}    
                                        </div>
                                        
                                        <div class="mb-4">
                                            <label for="exampleInputPassword1" className="form-label">Password</label>
                                            <input
                                            type="password"
                                            name="password"
                                            className="form-control" 
                                            id="exampleInputPassword1"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        {errors.password && touched.password && errors.password}    
                                        </div>
                                       
                                        
                                        <button class="btn btn-primary  mb-4 rounded-2" type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </form>
                                )}
                            </Formik>



                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Class3formPage;
