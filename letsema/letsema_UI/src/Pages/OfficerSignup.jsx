import React, { use } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const OfficerSignup = ({ submit }) => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAdress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        const details = {
            firstname,
            lastname,
            phone,
            address,
            email,
            password,
            confirmPassword
        }

        submit(details)
        return navigate('/signin')
    }


    return (
        <main style={{ height: '100vh' }} className="form-signin m-auto w-100 d-flex justify-content-center align-items-center">

            <form onSubmit={handleSubmit} className='w-50 mt-5'>

                <h1 className="h3 mb-3 fw-normal text-center">Create Account</h1>
            

                <div className="input-group mb-3">
                    <span className="input-group-text">First Name</span>
                    <input type="text" className="form-control me-1" placeholder="e.g Jane" aria-label="Username" value={lastname}
                        onChange={(e) => { setLastname(e.target.value) }}/>
                    <span className="input-group-text">Last Name</span>
                    <input type="text" className="form-control" placeholder="e.g Doe" aria-label="Server"  value={firstname}
                        onChange={(e) => { setFirstname(e.target.value) }}/>
                </div>

                <div className="form-floating mb-2">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <label for="floatingInput">Email address</label>
                </div>

                
                <div className="form-floating mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={address}
                        onChange={(e) => { setAdress(e.target.value) }}
                    />
                    <label for="floatingInput">Address</label>
                </div>

                <div className="form-floating mb-2">
                    <input
                        type="tel"
                        className="form-control"
                        id="floatingInput"
                        placeholder='e.g +277 9361918'
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                    />
                    <label for="floatingInput">Phone</label>
                </div>

                <div className="form-floating mb-2">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-2">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                    />
                    <label for="floatingPassword">Confirm Password</label>
                </div>
                <button className="btn btn-dark w-100 py-2" type="submit">Sign Up</button>

                <div className="form-check text-start my-3 text-center">
                    <p>Already have an account?     <NavLink to="/signin" class="nav-link d-inline text-white">Login</NavLink> </p>
                </div>
                <p className="mt-5 mb-3 text-center text-body-secondary">&copy;2025</p>
            </form>
        </main>
    )
}

export default OfficerSignup