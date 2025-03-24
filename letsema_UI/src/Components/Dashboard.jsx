import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleApplyLoanClick = () => {
    navigate('/apply-loan'); // Navigate to the LoanForm page
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card" onClick={handleApplyLoanClick}>📜 Apply for a Loan</div>
      <div className="dashboard-card">📊 View Loan Status</div>
      <div className="dashboard-card">📝 Borrower History</div>
      <div className="dashboard-card">📈 Reports & Analytics</div>
    </div>
  );
}

export default Dashboard;
