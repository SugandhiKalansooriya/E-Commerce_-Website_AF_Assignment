import React from 'react'


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        &nbsp;&nbsp;&nbsp;&nbsp;
    <h1><a class="navbar-brand" href="/">Home</a></h1>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      &nbsp;&nbsp;
        <a class="nav-item nav-link active" href="/reg_customers">Customer Register </a>
    
      </div>
    </div>
   
        <a href='/TraderPage'><button class="btn btn-outline-dark btn-lg" >Trader Page</button></a>
    
    &nbsp;&nbsp;
    <a href='/cartitems'><button class="btn btn-dark btn-lg" >Cart</button></a>
    &nbsp;&nbsp;
      <a href='/All_wishitems'><button class="btn btn-dark btn-lg"  margin-righ="80px"  >wishlist</button></a>
   
  </nav>


    
  )
}

export default Navbar