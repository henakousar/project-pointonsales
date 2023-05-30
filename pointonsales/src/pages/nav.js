import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function Nav() {
  

    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    );
  }
  
  export default Nav;