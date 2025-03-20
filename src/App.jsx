import { useState } from 'react'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import DashboardPage from './Pages/DashboardPage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {

  const register = async (details) => {
    try {
      const response = await axios.post('api/users', details)

    } catch (error) {
      alert('Could Not Register Account')
    }
  }

  const login = async (credentials) => {
    try {
      const response = await axios.get('api/users')

      const auth = response.data.filter(user => user.email === credentials.email && user.password === credentials.password)
      console.log(auth)

      if (auth.length === 1) {
        alert('logged in')
      } else {
        alert('Incorrect Credentials')
      }

    } catch (error) {
      alert('Could Not login')
    }


  }




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/signin' element={<LoginPage submit={login} />} />
        <Route path='/signup' element={<SignUpPage submit={register} />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFoundPage />} /> */}

      </Route>
    ))

  return <RouterProvider router={router} />
}

export default App
