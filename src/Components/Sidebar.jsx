import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./CSS/Sidebar.css"
import { Link, NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { PiJarLabelLight } from "react-icons/pi";

const Sidebar = () => {
  const [open,setOpen] = useState(false);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-container">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none sidebar-heading" onClick={() => {setOpen(!open)}}>
        <CiDumbbell/>
        {/* <span className="fs-4">BARSNRODS</span> */}
        {open? <span>BARSNRODS</span> : null}
      </div>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className= {({isActive}) => {return isActive?"active nav-link sidebar-element":"nav-link sidebar-element"}} >
            <IoHomeOutline/>
            <div>
            {open? <span>Home</span> : null}
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register" className= {({isActive}) => {return isActive?"active nav-link sidebar-element":"nav-link sidebar-element"}} >
          <FaWpforms/>
            <div>
            {open? <span>Register</span> : null}
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/equipments" className= {({isActive}) => {return isActive?"active nav-link sidebar-element":"nav-link sidebar-element"}}>
          <CiDumbbell/>
            <div>
            {open? <span>Gym Gears</span> : null}
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/supplements" className= {({isActive}) => {return isActive?"active nav-link sidebar-element":"nav-link sidebar-element"}}>
          <PiJarLabelLight/>
            <div>
            {open? <span>Supplements</span> : null}
            </div>
          </NavLink>
        </li>
      </ul>
      <hr/>
    </div>
  )
}

export default Sidebar