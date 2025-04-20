import React, { use } from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'

const LoanForm = () => {

    const [borrowerId,setBorrowerId] = useState('')
    const [borrowerName,setBorrowerName] = useState('')
    const [mfi,setMfi] = useState('')
    const [product,setProduct] = useState('')
    const [amount,setAmount] = useState('')
    const [term,setTerm] = useState('')
    const [purpose,setPurpose] = useState('')
    const [colateral,setColateral] = useState('')


    const handleSubmit = async(e)=>{
        e.preventDefault();

        let loanDetails = {
            borrowerId,
            borrowerName,
            mfi,
            product,
            amount,
            term,
            purpose,
            colateral
        }

        console.log(loanDetails)
    }



  return (
    <main style={{ height: '100vh' }} className="w-100 m-auto">
          <div class="row h-100">
            <div class="col-2" >
            <Navbar />
            </div>
        <div class="col-10 d-flex justify-content-center">
        <form onSubmit={handleSubmit}  className='w-50'>

        <h1 className="h3 mb-5 fw-normal text-center">Apply for loan</h1>

        <div className="input-group mb-3">
        <span className="input-group-text">Borrower ID</span>
            <input type="text" className="form-control me-1" placeholder="e.g 2740981" aria-label="Username" value={borrowerId} onChange={(e)=> setBorrowerId(e.target.value)}/>
            <span className="input-group-text">Name</span>
            <input type="text" className="form-control" placeholder="e.g Jane Doe" aria-label="Server" value={borrowerName} onChange={(e)=> setBorrowerName(e.target.value)}/>
        </div>

        <label for="mfi" className="form-label mt-2">Microfinance Institution:</label>
        <select id="mfi" className="form-select mb-2" aria-label="Default select example" value={mfi} onChange={(e)=> setMfi(e.target.value)}>
            <option selected>Choose MFI:</option>
            <option value="1">MFI 1</option>
            <option value="2">MFI 2</option>
            <option value="3">MFI 3</option>
        </select>

        <label for="product" className="form-label mt-2">Loan Product:</label>
        <select id="product" className="form-select mb-2" aria-label="Default select example" value={product} onChange={(e)=> setProduct(e.target.value)}>
            <option selected>Choose loan product:</option>
            <option value="1">Product 1</option>
            <option value="2">Product 2</option>
            <option value="3">Product 3</option>
        </select>

        <label for="product" className="form-label mt-2">Loan Details:</label>
        <div className="input-group mb-3">
            <span className="input-group-text">Loan Amount</span>
            <input type="text" className="form-control me-1" placeholder="e.g M2500" aria-label="Username" value={amount} onChange={(e)=> setAmount(e.target.value)} />
            <span className="input-group-text">Loan Term</span>
            <input type="text" className="form-control" placeholder="(in months)" aria-label="Server" value={term} onChange={(e)=> setTerm(e.target.value)}/>
        </div>


        <div className="mb-3">
            <label for="purpose" className="form-label">Loan Purpose:</label>
            <textarea className="form-control" id="purpose" rows="3"  placeholder="Describe the purpose of this loan..." value={purpose} onChange={(e)=> setPurpose(e.target.value)}></textarea>
        </div>

        <div className="mb-3">
            <label for="colateral" className="form-label">Colateral:</label>
            <input type="text" className="form-control" id="colateral" placeholder="e.g., Property, Vehicle" value={colateral} onChange={(e)=> setColateral(e.target.value)}/>
        </div>


        <button className="btn btn-dark w-100 py-2" type="submit">Submit Application</button>

        <p className="mt-5 mb-3 text-center text-body-secondary">&copy;2025</p>
        </form>
        </div>
    </div>
   
</main>
)
  
}

export default LoanForm