import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const All_WishItem= () => {
const [wish_listitems , setwish_listitems] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:5000/wish_list/")
      .then(res=> setwish_listitems(res.data))
      .catch(error=>console.log(error));
    });

   
      return (
  <div className='container py-5 h-100'>
  <div className="container">
  <h1>Your Wish list</h1>
  <table className="table">
       <thead>
         <tr>
         <th scope="col"> index </th> 
           <th scope="col"> productname</th>
            <th scope="col">  price</th>
            <th scope="col">madeIn</th>
             <th scope="col">guarantee_period</th>
             <th scope="col">description</th>
             <th scope="col"> </th>
           </tr>
       </thead>
      
                       <tbody>
                       
                       { wish_listitems.map((wish_listitems,index) =>(
                        
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
  
  
                       
                          <td>{wish_listitems.productname}</td>
                          <td>{wish_listitems.brand}</td>
                          <td>{wish_listitems.madeIn}</td>
                          <td>{wish_listitems.guarantee_period}</td>
                          <td>{wish_listitems.description}</td>
                          <td><a href={`/wish-cart/${wish_listitems.id}`}><button type="button" class="btn btn-outline-primary">add to cart</button></a></td>
                      
                        </tr>
                       
                       ))}               
                       </tbody>
       </table>  






      <a href="/"><button class="btn btn-outline-secondary btn-lg"> add more items to wish list</button></a> 
      </div>
      </div>
      );     
      };
  


export default All_WishItem;