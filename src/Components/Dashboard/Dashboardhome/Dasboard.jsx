import React from "react";
import "./Dashboard.css";
// import logo from "../../../Assets/logo2.jpeg";
import avatar from "../../../Assets/person.jpeg";
import { Link, Route, Routes } from "react-router-dom";


import { AiFillHome } from 'react-icons/ai'
import { MdOutlineGroups, MdFolder, MdContactSupport, MdSettings } from 'react-icons/md'
import { SlNotebook } from 'react-icons/sl'

import Homedashboard from "../Homedasboard/Homedashboard";

const Dasboard = () => {
  return (
    <div className="dashboard">
        <div className="side-nav">
        {/* <div className="community-logo">
            <img src={logo} alt="" />
        </div> */}
        <div className="user-avatar">
            <img src={avatar} alt="" />
        </div>
        <div className="user-info">
            <h2 className="username">User Name</h2>
            <p className="useremail">user-email@silica.com</p>
        </div>
        <div className="side-links">
            <Link to="/dasboard/home"><AiFillHome />Dashboard</Link>
            <Link to="/dasboard/home"><MdOutlineGroups />Events</Link>
            <Link to="/dasboard/home"><MdFolder />Projects</Link>
            <Link to="/dasboard/home"><SlNotebook />Resources</Link>
            <Link to="/dasboard/home"><MdContactSupport />Support</Link>
            <Link to="/dasboard/home"><MdSettings />Settings</Link>
        </div>
        </div>
        <div className="dashboards">
            <Routes>
                <Route path="/" element={<Homedashboard />}/>
            </Routes>
        </div>
    </div>
  );
};

export default Dasboard;
