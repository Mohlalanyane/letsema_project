import React from 'react'
import Dashboard from '../Components/Dashboard'
import Navbar from '../Components/Navbar'


const DashboardPage = () => {
  return (

    // <div className='d-flex'>
    //   <Navbar />
    //   <Dashboard />
    // </div>

    <div class="w-100" style={{ height: '100vh' }}>
      <div class="row h-100">
        <div class="col-2" >
          <Navbar />
        </div>
        <div class="col-10">
            <Dashboard/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage