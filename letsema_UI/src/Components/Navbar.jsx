import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Letsema</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/apply-loan">Apply for Loan</Link></li>
        <li><Link to="/status">Loan Status</Link></li>
        <li><Link to="/history">Borrower History</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
