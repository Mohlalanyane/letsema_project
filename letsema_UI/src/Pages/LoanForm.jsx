

import React, { useState } from 'react';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    loanTerm: '',
    purpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., call an API or update state)
    alert('Loan Application Submitted');
  };

  return (
    <div className="loan-form">
      <h2>Apply for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Loan Amount</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Loan Term (in months)</label>
          <input
            type="number"
            name="loanTerm"
            value={formData.loanTerm}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Purpose</label>
          <input
            type="text"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default LoanForm;
