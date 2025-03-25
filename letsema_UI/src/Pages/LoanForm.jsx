import React, { useState } from 'react';
//import './LoanForm.css';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    maritalStatus: [],
    email: '',
    mobileNumber: '',
    homeNumber: '',
    address: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        maritalStatus: checked
          ? [...prevData.maritalStatus, value]
          : prevData.maritalStatus.filter((status) => status !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Loan Application Submitted');
  };

  return (
    <div className="loan-form-container">
      <h2>Loan Application Form</h2>
      <p>Please fill out the fields below in as much detail as possible. Once we receive your form, we will begin the application process.</p>
      <h3>Contact Information</h3>
      <form onSubmit={handleSubmit} className="loan-form">
        <div className="form-row">
          <label>First & Last Name</label>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Second Name" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Title</label>
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="">Please select...</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
        </div>
        <div className="form-group">
          <label>Marital Status</label>
          <div className="checkbox-group">
            <label><input type="checkbox" name="maritalStatus" value="Single" onChange={handleChange} /> Single</label>
            <label><input type="checkbox" name="maritalStatus" value="Married" onChange={handleChange} /> Married</label>
            <label><input type="checkbox" name="maritalStatus" value="Other" onChange={handleChange} /> Other</label>
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="ex: muname@example.com" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input type="tel" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Home Number (If Applicable)</label>
          <input type="tel" name="homeNumber" placeholder="Home Number" value={formData.homeNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" placeholder="Street Address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <input type="text" name="state" placeholder="State / Province" value={formData.state} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default LoanForm;
