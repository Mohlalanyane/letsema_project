import React from 'react'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'


const DashboardPage = () => {
    return (

        <div>
      <Navbar />
      <div className="home-container">
        <h2>Welcome to Letsema Loan Management</h2>
        <Dashboard />
      </div>
    </div>
    )
}

export default DashboardPage