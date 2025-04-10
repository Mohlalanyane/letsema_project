import React from 'react'
import { NavLink } from 'react-router-dom'
import './cover.css'

const IndexPage = () => {
  return (
    <body class="d-flex h-100 text-center text-white bg-dark">
    
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Cover</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <NavLink class="nav-link active" aria-current="page" to='/signin'>Sign in</NavLink>
            <NavLink class="nav-link active" aria-current="page" to='/signup'>Borrower Signup</NavLink>
            <NavLink class="nav-link active" aria-current="page" to='/officer_signup'>Officer Signup</NavLink>
          </nav>
        </div>
      </header>
    
      <main class="px-3">
        <h1>Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
        </p>
      </main>
    
      <footer class="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer>
    </div>
    
    
        
      </body>
    
  )
}

export default IndexPage