import React from 'react'
import MFIDashboard from '../Components/MFIDashboard'
import MFINavbar from '../Components/MFINavbar'


const MFIDashboardPage = () => {
  return (

    // <div className='d-flex'>
    //   <Navbar />
    //   <Dashboard />
    // </div>

    <div class="w-100" style={{ height: '100vh' }}>
      <div class="row h-100">
        <div class="col-2" >
          <MFINavbar />
        </div>
        <div class="col-10">
            <MFIDashboard/>
        </div>
      </div>
    </div>
  )
}

export default MFIDashboardPage