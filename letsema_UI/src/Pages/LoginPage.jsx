import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const LoginPage = ({ submit }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault()

        const credentials = {
            email,
            password
        }

        if ( submit(credentials) === true ){
            return navigate('/dashboard')
        } else {
            return navigate('/signin')
        }

        

    }

    return (
        <main style={{ height: '100vh' }} className="form-signin w-100 m-auto d-flex justify-content-center align-items-center">
            <form className='w-25 p-2' onSubmit={handleSubmit}>

                <h1 className="h3 mb-3 fw-normal text-center">Please Log in</h1>

                <div className="form-floating mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="JaneDoe@gmail.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <label for="floatingInput">Email Address</label>
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


                <button className="btn btn-dark w-100 py-2" type="submit">Login</button>

                <div className="form-check text-start my-3 text-center">
                    <p>Dont have an account?   <NavLink to="/signup" class="nav-link d-inline text-white">Sign Up</NavLink> </p>
                </div>

                <p className="mt-5 mb-3 text-center text-body-secondary">&copy;2025</p>
            </form>
        </main>
    )
}

export default LoginPage