import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Letsema</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/apply">Apply for Loan</a></li>
        <li><a href="/status">Loan Status</a></li>
        <li><a href="/history">Borrower History</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
