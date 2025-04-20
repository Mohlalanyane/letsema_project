import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import "./Dashboard.css";

function MFIDashboard() {
  // Sample Data
  const loanApplicationsData = [
    { month: "Jan", applications: 30 },
    { month: "Feb", applications: 45 },
    { month: "Mar", applications: 28 },
    { month: "Apr", applications: 50 },
    { month: "May", applications: 35 },
    { month: "Jun", applications: 40 },
  ];

 


  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="dashboard w-100">
      {/* Welcome message */}
      <h1 className="display-5 text-dark">Dashboard</h1>
    
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

      <div className="container my-3">

      <div class="row d-flex justify-content-center align">
        <div class="col">
        <table class="table h-100 table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">MFI</th>
            <th scope="col">Date applied</th>
            <th scope="col">Status</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
      <tr>
        <th scope="row">MFI 1</th>
        <td>25 May 2021</td>
        <td>Pending</td>
        <td>M2599.99</td>
      </tr>
      <tr>
      <th scope="row">MFI 1</th>
        <td>25 May 2021</td>
        <td>Pending</td>
        <td>M2599.99</td>
      </tr>
      <tr>
      <th scope="row">MFI 1</th>
        <td>25 May 2021</td>
        <td>Pending</td>
        <td>M2599.99</td>
        </tr>
      </tbody>
    </table>
        </div>
        <div class="col">
        <div className="analytics-card h-100">
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
        </div>
      </div>

       
        
      </div>
    </div>
  );
}

export default MFIDashboard;