import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import "./Dashboard.css";

function Dashboard() {
  // Sample Data
  const loanApplicationsData = [
    { month: "Jan", applications: 30 },
    { month: "Feb", applications: 45 },
    { month: "Mar", applications: 28 },
    { month: "Apr", applications: 50 },
    { month: "May", applications: 35 },
    { month: "Jun", applications: 40 },
  ];

  const loanApprovalData = [
    { status: "Approved", value: 65 },
    { status: "Rejected", value: 25 },
    { status: "Pending", value: 10 },
  ];

  const borrowerHistoryData = [
    { name: "John Doe", loans: 5 },
    { name: "Jane Smith", loans: 3 },
    { name: "Michael Brown", loans: 4 },
    { name: "Alice Johnson", loans: 6 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="dashboard w-100">
      {/* Welcome message */}
      <h1 className="display-5">Dashboard</h1>
      <h2 className="display-6 mb-3">Welcome to Letsema Loan Management</h2>


      <div className="">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: '20rem' }}>
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Total Outstanding Loans</h5>
                  <p className="card-text fs-3 fw-bold">LSL 25000</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="text-success bi bi-coin" viewBox="0 0 16 16">
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div class="card" style={{ width: '20rem' }}>
              <div class="card-body d-flex justify-content-between">
                <div>
                  <h5 class="card-title">Loan Applications</h5>
                  <p class="card-text fs-3 fw-bold">17</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="text-primary bi bi-coin" viewBox="0 0 16 16">
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: '20rem' }}>
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Repayments This Month</h5>
                  <p className="card-text fs-3 fw-bold">10</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="text-danger bi bi-coin" viewBox="0 0 16 16">
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="analytics-container">
        {/* Loan Applications Overview */}
        <div className="analytics-card">
          <h2>Loan Applications Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={loanApplicationsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="applications" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Loan Approval Status */}
        <div className="analytics-card">
          <h2>Loan Approval Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={loanApprovalData} dataKey="value" nameKey="status" cx="50%" cy="50%" outerRadius={80} label>
                {loanApprovalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Borrower History Overview */}
        <div className="analytics-card">
          <h2>Borrower History Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={borrowerHistoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="loans" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Reports & Analytics */}
        <div className="analytics-card">
          <h2>Reports & Analytics</h2>
          <p>More detailed reports coming soon...</p>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
