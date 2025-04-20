import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function MFINavbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 h-100" style={{ width: '100%', height: '100%', backgroundColor:' #1f2a3e' }}>
      <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi pe-none me-2 mt-3" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
        <span className="fs-4 text-white">User Name</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-3 ">
        <li className="nav-item">
          <NavLink to="/" className="nav-link link-body-emphasis text-white" aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link link-body-emphasis text-white" to="/apply-loan">
            Borrowers
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis text-white">
            Loans & Repayments
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis text-white">
            Loan Applications
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis text-white">
            Credit History
          </NavLink>
        </li>

      </ul>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis text-white">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link link-body-emphasis text-white">
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MFINavbar;