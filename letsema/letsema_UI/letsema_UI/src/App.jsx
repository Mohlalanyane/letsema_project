import { useState } from 'react'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import MFISignup from './Pages/MFISignup'
import IndexPage from './Pages/IndexPage'
import OfficerSignup from './Pages/OfficerSignup'
import DashboardPage from './Pages/DashboardPage'
import LoanForm from './Pages/LoanForm'
import NotFound from './Pages/NotFound'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useNavigate } from 'react-router-dom'
import api from './api'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";


function App() {
  const register = async (details) => {
    try {
      const username = details.names
      const password =  details.password

      const res = await api.post("/api/user/register/", { username, password })

    } catch (error) {
      alert('Could Not Register Account')
    }
  }

  const login = async (credentials) => {
    try {
      //const response = await axios.get('api/users')
      const email = credentials.email
      const password =  credentials.password
      alert("sending data")
      const res = await axios.post("http://localhost:8000/api/token/", {
          email: email,  
          password: password
      }, {
          headers: { "Content-Type": "application/json" }
      });

      alert("done sending data")
      console.log(res)
 
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

      window.location.href = "/dashboard";

      return true

    } catch (error) {
      alert(`the error produced when logging in is ${error}  redirect back to login`)
      if (error.response && error.response.status === 400) {
        alert(`Bad Request: ${error.response.data.detail || "Invalid input"}`);
      }
    
      return false
    }

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
         <Route path='/' element={<IndexPage  />} />
        <Route path='/signin' element={<LoginPage submit={login} />} />
        <Route path='/signup' element={<SignUpPage submit={register} />} />
        <Route path='/mfi_signup' element={<MFISignup submit={register} />} />
        <Route path='/officer_signup' element={<OfficerSignup submit={register} />} />
        <Route
          path="/dashboard"
          element={
            //<ProtectedRoute>
              <DashboardPage />
            //</ProtectedRoute>
          }
        />
        <Route path="/apply-loan" element={<LoanForm />} />
        <Route path="*" element={<NotFound />}></Route>

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
