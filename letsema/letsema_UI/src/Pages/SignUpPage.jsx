import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const details = {
            first_name: firstname,  // Match API field names
            last_name: lastname,
            "phone number": phone,  // Ensure consistency with API fields
            address: address,
            email: email,
            password: password
        };

        try {
            const response = await axios.post("http://localhost:8000/api/user/register/", details, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("Registration Response:", response);
            alert("Registration successful!");

            // Navigate to the sign-in page after successful registration
            navigate("/signin");
        } catch (error) {
            if (error.response) {
                console.error("Registration Error:", error.response);
                alert(`Registration failed: ${error.response.data.detail || "Please check your inputs."}`);
            } else if (error.request) {
                console.error("No response:", error.request);
                alert("No response from server. Check your internet connection.");
            } else {
                console.error("Request error:", error.message);
                alert("An error occurred while sending the request.");
            }
        }
    };

    return (
        <main style={{ height: '100vh' }} className="form-signin m-auto w-100 d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className='w-50 mt-5'>
                <h1 className="h3 mb-3 fw-normal text-center">Create Account</h1>

                <div className="input-group mb-3">
                    <span className="input-group-text">First Name</span>
                    <input type="text" className="form-control me-1" placeholder="e.g Jane" aria-label="First Name" value={firstname}
                        onChange={(e) => setFirstname(e.target.value)} required />
                    <span className="input-group-text">Last Name</span>
                    <input type="text" className="form-control" placeholder="e.g Doe" aria-label="Last Name" value={lastname}
                        onChange={(e) => setLastname(e.target.value)} required />
                </div>

                <div className="form-floating mb-2">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" className="form-control" id="floatingAddress" placeholder="Address"
                        value={address} onChange={(e) => setAddress(e.target.value)} required />
                    <label htmlFor="floatingAddress">Address</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="tel" className="form-control" id="floatingPhone" placeholder="e.g +266 7816873681"
                        value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <label htmlFor="floatingPhone">Phone</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                </div>

                <button className="btn btn-dark w-100 py-2" type="submit">Sign Up</button>

                <div className="form-check text-start my-3 text-center">
                    <p>Already have an account? <NavLink to="/signin" className="nav-link d-inline text-white">Login</NavLink></p>
                </div>
                <p className="mt-5 mb-3 text-center text-body-secondary">&copy;2025</p>
            </form>
        </main>
    );
};

export default SignUpPage;
