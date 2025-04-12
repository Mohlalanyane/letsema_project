import React, { use } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const MFISignup = ({ submit }) => {

    const navigate = useNavigate();

    const [MFIname, setMFIname] = useState('');
    const [agent, setAgent] = useState('');
    const [MFIaddress, setMFIaddress] = useState('');
    const [licenceNum, setLicenceNum] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault()

        const details = {
            MFIname,
            MFIaddress,
            licenceNum,
            agent
        }

        submit(details)
        return navigate('/signin')
    }


    return (
        <main style={{ height: '100vh' }} className="form-signin mt-5 w-100 d-flex justify-content-center align-items-center">

            <form onSubmit={handleSubmit} className='w-50 mt-5'>

                <h1 className="h3 mb-3 fw-normal text-center">Create Account</h1>
            

               

                <div className="input-group mb-3">
                    <span className="input-group-text">MFIname</span>
                    <input type="text" className="form-control me-1" placeholder="e.g Lesotho Alliance" aria-label="Username" value={MFIname}
                        onChange={(e) => { setMFIname(e.target.value) }}/>
                </div>

               

                <div className="form-floating mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={MFIaddress}
                        onChange={(e) => { setMFIaddress(e.target.value) }}
                    />
                    <label for="floatingInput">MFI Address</label>
                </div>

                
        
                
                <div className="form-floating mb-2">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={licenceNum}
                        onChange={(e) => { setLicenceNum(e.target.value) }}
                    />
                    <label for="floatingInput">Licence Number</label>
                </div>

                <select class="form-select form-select-md mb-3" aria-label=".form-select-sm example">
                    <option selected>Choose Agent</option>
                    <option value="1">agent 1</option>
                    <option value="2">agent 2</option>
                </select>
               

                
                

               

                
                <button className="btn btn-dark w-100 py-2" type="submit">Sign Up</button>

                <div className="form-check text-start my-3 text-center">
                    <p>Already have an account?     <NavLink to="/signin" class="nav-link d-inline text-white">Login</NavLink> </p>
                </div>
                <p className="mt-5 mb-3 text-center text-body-secondary">&copy;2025</p>
            </form>
        </main>
    )
}

export default MFISignup;