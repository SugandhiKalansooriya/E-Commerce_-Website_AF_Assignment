import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "../form.css"

const Add_Item = () => {
   
    const history = useNavigate();
    const [inputs, setInputs] = useState({
     productname:"",
     price:"",
     madeIn:"",
     guarantee_period:"",
     description:""
    });
    
   
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
     
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/items/", {
            
        productname:String(inputs.productname),
        price:String(inputs. price),
        madeIn:String(inputs.madeIn),
        guarantee_period:String(inputs.guarantee_period),
        description:String(inputs.description)
        
         
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(alert("Added the item into the site")).then(() => history("/"));
    };
  
    
    

  return (
    <div className='container py-5 h-100'>
   <div id='form' className=" text-center" >
<form onSubmit={handleSubmit}>
<h1> Add Item to the website</h1>
  


<div className='contain'>

      
<label >Product Name</label>      
<input type="text"
 name="productname" 
 placeholder="product name"
 value={inputs.productname}
 onChange={handleChange}
 required
 />


</div>

<div className='contain'>

      
<label >Price</label>      
<input type="number"
 name="price" 
 placeholder="Rs."
 value={inputs.price}
 onChange={handleChange}
 required
 
 />


</div>

<div className='contain'>

      
<label > Country</label>      
<input type="text"
 name="madeIn" 
 placeholder="Made In"
 value={inputs.madeIn}
 onChange={handleChange}
 required
 />


</div>

  
<div className='contain'>

      
<label >Guarantee Period</label>      
<input type="text"
 name="guarantee_period" 
 placeholder="guarantee period"
 value={inputs.guarantee_period}
 onChange={handleChange}
 required
 />


</div>
<div className='contain'>

      
<label >Description</label>      
<input type="text"
 name="description" 
 placeholder="description"
 value={inputs.description}
 onChange={handleChange}
 required
 />
 

</div>

  
  


     
  

<button type="submit">submit</button>
 
</form>
     </div>

</div>
  )
}

export default  Add_Item ;