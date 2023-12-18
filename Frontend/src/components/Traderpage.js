import React from 'react'
import "./Navbar.css"

const TraderPage = () => {
  return (
    <div >
      <section class="container py-5 h-100" >
<div class="container px-4">
        <div class="row gx-8">

          <div class="col">
            <a href="/All_customers" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Registered customers</div>
            </a>
          </div>

          <div class="col">
            <a href="/All_promotions" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Promotions</div>
            </a>
          </div>
          <div class="col">
            <a href="/All_traders" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Traders</div>
            </a>
          </div>
          <div class="col">
            <a href="/All_items" style={{textDecoration:'none' ,color:'white'}}> 
                <div class="p-5 border bg-dark">Items</div>
            </a>
          </div>
        </div>
      </div>
      </section>
</div>



  )
}

export default TraderPage;