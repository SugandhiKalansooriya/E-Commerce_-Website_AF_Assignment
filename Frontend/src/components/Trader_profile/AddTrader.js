import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "../form.css"

const Add_Trader = () => {
   
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name:" ",
        email:" ",
        businessName:"",
        address:"",
        contactNo:""
    });
    
   
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
     
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/traders/", {
            
        name:String(inputs.name),
        email:String(inputs.email),
        businessName:String(inputs.businessName),
        address:String(inputs.address),
        contactNo:String(inputs.contactNo)
         
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(alert("Registered the trader")).then(() => history("/All_traders"));
    };
  
    
    

  return (
   <div id="form" className='container py-5 h-100'>
<form onSubmit={handleSubmit}>
<h1> Register Trader</h1>
  


<div className='contain'>

      
<label > Name</label>      
<input type="text"
 name="name" 

 value={inputs.name}
 onChange={handleChange}
 required
 />


</div>

<div className='contain'>

      
<label >Email</label>      
<input type="text"
 name="email" 
 
 value={inputs.email}
 onChange={handleChange}
 required
 />


</div>

<div className='contain'>

      
<label > Business Name</label>      
<input type="text"
 name="businessName" 
 value={inputs.businessName}
 onChange={handleChange}
 required
 />


</div>

  
<div className='contain'>

      
<label >Address</label>      
<input type="text"
 name="address" 
 value={inputs.address}
 onChange={handleChange}
 required
 />


</div>
<div className='contain'>

      
<label >Contact No</label>      
<input type="text"
 name="contactNo" 
 value={inputs.contactNo}
 onChange={handleChange}
 required
 />


</div>

  
  


     
  

<button type="submit">submit</button>
 
</form>
     </div>

  
  )
}

export default  Add_Trader ;