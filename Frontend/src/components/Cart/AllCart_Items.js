import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




const All_CartItem= () => {


    const [Cart_items , setCart_items] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:5000/cart_items/")
      .then(res=> setCart_items(res.data))
      .catch(error=>console.log(error));
  
  
    });

  
    
   
   


 

   
  

   
      return (
  <div className='container py-5 h-100'>
  <div className="container">
  <h1 class="d-flex justify-content-center">Cart </h1>
  <div className='container py-5 h-100'>
  <table className="table">
       <thead>
         <tr>
         <th scope="col"> Index </th> 
           <th scope="col"> Product Name</th>
            <th scope="col">  Price per One item </th>
             <th scope="col">Quantity</th>
             <th scope="col">Total Price </th>
          
            
                
             
         </tr>
       </thead>
      
                       <tbody>
                       
                       { Cart_items.map((Cart_items,index) =>(
                        
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
  
  
                       
                          <td>{Cart_items.productname}</td>
                          <td>Rs.{Cart_items.price}</td>
                          <td>{Cart_items.Quantity}</td>
                          <td>Rs.{(parseInt(Cart_items.price)*parseInt(Cart_items.Quantity))}</td>
                          
                        </tr>
                       
                       ))}               
                       </tbody>
       </table>  

</div>




      <a href="/"><button  class="btn btn-outline-secondary btn-lg"> add more items to cart</button></a> 
      </div>
      </div>
      );     
      };
  


export default All_CartItem;