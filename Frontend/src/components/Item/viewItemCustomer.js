import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './viewItemCustomer.css'



const View_Item= () => {


    const [items , setitems] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:5000/items/")
      .then(res=> setitems(res.data))
      .catch(error=>console.log(error));
  
  
    });

  

   
      return (
  
  <div className='container py-5 h-100'>

 <h1 class="text-center">New Arrival Items</h1>
 <div className='py-3 h-10'>
   <ul>
                       
                       { items.map((items,index) =>(
                        
                        <li key={index} className='card'>
                          
  
  
                       
                          <h4>{items.productname}</h4>
                          <h5>Rs.{items.price}</h5>
                          <h6>Made In -{items.madeIn}</h6>
                          <h6>Gurantee-{items.guarantee_period}</h6>
                          <h6>{items.description}</h6>
                          <h5><a href={`/cart/${items.id}`}><button class="btn btn-outline-dark">Add to cart</button></a> </h5>
                          
                          <h5><a href={`/wishlist/${items.id}`}><button class="btn btn-outline-secondary">Add to wish list</button></a> </h5>
                       </li>
                        
                       ))}               
                       
                       </ul>
      </div>
      </div>
      );     
      };
  


export default View_Item;