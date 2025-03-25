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
    <div className="dashboard">
      {/* Welcome message */}
      <h2 className="welcome-message">Welcome to Letsema Loan Management</h2>

      {/* Analytical Dashboard */}
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
