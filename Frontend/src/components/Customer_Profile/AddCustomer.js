import React ,{ useEffect, useState }from 'react'
import axios from "axios"

import { useNavigate } from "react-router-dom";





const Add_Customer = () => {
   


    const history = useNavigate();
    const [inputs, setInputs] = useState({
      
        fname:" ",
        email:" ",
        city:" "
     
  
    });
    
    //const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/customers/", {
            
            fname:String(inputs.fname),
            email:String(inputs.email),
            city:String(inputs.city)
         
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(alert("Registered  as a customer")).then(() => history("/"));
    };
  
    
    

  return (
   <div id="form" class="container py-5 h-100">
<form onSubmit={handleSubmit}>
<h1> Register Customer</h1>
  


<div className='contain'>

      
<label > Name</label>      
<input type="text"
 name="fname" 
 placeholder="name"
 value={inputs.fname}
 onChange={handleChange}
 required
 />


</div>

<div className='contain'>

      
<label >Email</label>      
<input type="text"
 name="email" 
 placeholder="email"
 value={inputs.email}
 onChange={handleChange}
 required
 />


</div>

<div className='contain'>

      
<label > City</label>      
<input type="text"
 name="city" 
 placeholder="city"
 value={inputs.city}
 onChange={handleChange}
 required
 />


</div>

  


  
  


     
  

<button type="submit">submit</button>
 
</form>
     </div>

  
  )
}

export default  Add_Customer;