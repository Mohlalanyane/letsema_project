import React, { use } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignUpPage = ({ submit }) => {

    const navigate = useNavigate();

    const [names, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        const details = {
            names,
            email,
            password,
            confirmPassword
        }

        submit(details)
        return navigate('/signin')
    }


    return (
        <main style={{ height: '100vh' }} className="form-signin w-100 m-auto bg-secondary d-flex justify-content-center align-items-center">

            <form onSubmit={handleSubmit} className='w-25'>

                <h1 className="h3 mb-3 fw-normal text-center">Create Account</h1>


                <div className="form-floating mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Jane"
                        value={names}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <label for="floatingInput">Username</label>
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
                    <p>Already have an account?     <NavLink to="/signin" class="nav-link d-inline text-white">Sign In</NavLink> </p>
                </div>

                <p className="mt-5 mb-3 text-center text-body-secondary">&copy;2025</p>
            </form>
        </main>
    )
}

export default SignUpPage