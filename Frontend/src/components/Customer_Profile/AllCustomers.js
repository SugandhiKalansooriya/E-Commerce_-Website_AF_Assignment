
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




const AllCustomers= () => {


    const [customers , setcustomers] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:5000/customers/")
      .then(res=> setcustomers(res.data))
      .catch(error=>console.log(error));
  
  
    });

  

   
      return (
  <div class="container py-5 h-100">
  <div className="container">
  <h1 class="d-flex justify-content-center"> Registered customers</h1>
  <div class="container py-5 h-100">
  <table className="table">
       <thead>
         <tr>
         <th scope="col"> Index </th> 
      
            <th scope="col"> Name </th>
             <th scope="col">Email</th>
             <th scope="col">City</th>
               
             
         </tr>
       </thead>
      
                       <tbody>
                       
                       { customers.map((customers,index) =>(
                        
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
  
  
                          
                          <td>{customers.fname}</td>
                          <td>{customers.email}</td>
                          <td>{customers.city}</td>
                         
                         
                        </tr>
                       ))}               
                       </tbody>
       </table>  
       </div>
      <a href="/reg_customers"><button class="btn btn-outline-secondary btn-lg"> Register  as a customer</button></a> 
      </div>
      </div>
      );     
      };
  


export default AllCustomers;
