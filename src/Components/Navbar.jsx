import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0  bg-body-tertiary h-100" style={{ width: '100%', height: '100%' }}>
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi pe-none me-2 mt-3" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
        <span className="fs-4">User Name</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link link-body-emphasis" aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link link-body-emphasis" to="/loan-application">
            Apply for loan
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis">
            Loan Status
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis">
            Loan Applications
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis">
            Credit History
          </NavLink>
        </li>

      </ul>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis">
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
