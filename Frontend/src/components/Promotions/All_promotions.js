
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




const All_Promotions = () => {


    const [promotions , setpromotions] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:5000/promotions/")
      .then(res=> setpromotions(res.data))
      .catch(error=>console.log(error));
  
  
    });

  

   
      return (
  <div className='container py-5 h-100'>
  <div className="container">
  <h1 class="d-flex justify-content-center">Promotions</h1>
  <div className='container py-5 h-100'>
  <table className="table">
       <thead>
         <tr>
         <th scope="col"> Index </th> 
           <th scope="col"> Starting Date </th>
            <th scope="col"> Ending Date </th>
             <th scope="col">Description</th>
             
                
             
         </tr>
       </thead>
      
                       <tbody>
                       
                       { promotions.map((promotions,index) =>(
                        
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
  
  
                           
                          <td>{promotions.startingdate}</td>
                          <td>{promotions.endingdate}</td>
                          <td>{promotions.description}</td>
                        
                        </tr>
                       ))}               
                       </tbody>
       </table>  
</div>
      <a href="/Add_promotions"><button class="btn btn-outline-secondary btn-lg">Add_promotion</button></a> 
      </div></div>
      );     
      };
  


export default All_Promotions;






