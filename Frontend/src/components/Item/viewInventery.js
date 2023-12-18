import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




const AllItem= () => {


    const [items , setitems] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:5000/items/")
      .then(res=> setitems(res.data))
      .catch(error=>console.log(error));
  
  
    });

  

   
      return (
        
  <div className='container py-5 h-100'>
  <div className="container">
  <h1 class="d-flex justify-content-center">Inventery</h1>
  <div className='container py-5 h-100'>
  <table className="table">
       <thead>
         <tr>
         <th scope="col"> Index </th> 
           <th scope="col"> Product Name</th>
            <th scope="col">  Price</th>
             <th scope="col">Made In</th>
             <th scope="col">Guarantee Period</th>
             <th scope="col">Description</th>
            
                
             
         </tr>
       </thead>
      
                       <tbody>
                       
                       { items.map((items,index) =>(
                        
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
  
  
                       
                          <td>{items.productname}</td>
                          <td>{items.price}</td>
                          <td>{items.madeIn}</td>
                          <td>{items.guarantee_period}</td>
                          <td>{items.description}</td>
                          <td><a href={`/All_items/${items.id}`}><button class="btn btn-outline-secondary">Edit_item</button></a> </td>
                       
                        </tr>
                       ))}               
                       </tbody>
       </table>  
</div>
      <a href="/Add_items"><button class="btn btn-outline-secondary btn-lg">Add items to the site</button></a> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/ "><button class="btn btn-outline-secondary btn-lg" align="right">customer's item view page</button></a> 
      </div>
      </div>
      );     
      };
  


export default AllItem;