import React from "react";
import { Link,Outlet } from "react-router-dom";
import "./Layout.css";
import "./Dashbord.jsx"

function Layout() {
return (
    <div className="layout-container">
      <div className="sidebar">
        <img src="../Public/loginlogo.png" alt="Logo" className="logo" />
         {/* <h3 className="menu-item">DASHBOARD</h3> */}
         <Link to="Dashbord" className="menu-item"> DASHBORD
        </Link>
        <Link to="classes" className="menu-item"> CLASSES
        </Link>
      </div>

      <div className="main-content">
        <Outlet /> {/* Render sub-pages here */}
      </div>
    </div>


);
}
export default Layout;
// src/Layout.jsx
