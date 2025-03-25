import React from 'react'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'


const DashboardPage = () => {
    return (

        <div>
      <Navbar />
      <div className="home-container">
        <Dashboard />
      </div>
    </div>
    )
}

export default DashboardPage