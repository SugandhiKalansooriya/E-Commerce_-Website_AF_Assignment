import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




const AllTraders= () => {


    const [traders , settraders ] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:5000/traders/")
      .then(res=> settraders(res.data))
      .catch(error=>console.log(error));
  
  
    });

  

    
      return (
  <div className='container py-5 h-100'>
  <div className="container">
  <h1 class="d-flex justify-content-center">All Registered Traders</h1>
  <div className='container py-5 h-100'>
  <table className="table">
       <thead>
         <tr>
         <th scope="col"> Index </th> 
       
            <th scope="col"> Name </th>
             <th scope="col">Email</th>
             <th scope="col">Business Name</th>
             <th scope="col">Address</th>
             <th scope="col">Contact No</th>
                <div className="col-lg-9 mt-2 mb-2">
                 
                </div>
             
         </tr>
       </thead>
      
                       <tbody>
                       
                       { traders.map((traders,index) =>(
                        
                        <tr key={index}>
                          <td scope="row">{index+1}</td>
  
  
                          
                          <td>{traders.name}</td>
                          <td>{traders.email}</td>
                          <td>{traders.businessName}</td>
                          <td>{traders.address}</td>
                          <td>{traders.contactNo}</td>
                          
                        </tr>
                       ))}               
                       </tbody>
       </table>  
       </div>
      <a href="/reg_traders"><button class="btn btn-outline-secondary btn-lg">Register as a Trader</button></a> 
      </div>
      </div>
      );     
      };
  


export default AllTraders;