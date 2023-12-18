import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import "../form.css"
const EditItems = () => {

  const [inputs, setInputs] = useState({});
  const id =useParams().id;
  const history = useNavigate();


  useEffect(() => {
  const fetchHandler = async () => {
    await axios
      .get(`http://localhost:5000/items/${id}`)
      .then((res) =>setInputs(res.data) )
        
   
    
         
      };
      fetchHandler()
    }, [id]);

   
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };


    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/items/${id}`, {
            
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
      sendRequest().then(alert("Edited the item details")).then(() => history("/All_items"));
    };

  return (
    <div className='container py-5 h-100'>
    <div id='form'> 
     {inputs && (<form onSubmit={handleSubmit} >
    <h1> Edit Item details</h1>
      
    
    
    <div className='contain'>
    
          
    <label >productname</label>      
    <input type="text"
     name="productname" 
     placeholder="product name"
     value={inputs.productname}
     onChange={handleChange}
    
     />
    
    
    </div>
    
    <div className='contain'>
    
          
    <label >price</label>      
    <input type="number"
     name="price" 
     placeholder="Rs."
     value={inputs.price}
     onChange={handleChange}
     
     />
    
    
    </div>
    
    <div className='contain'>
    
          
    <label > Country</label>      
    <input type="text"
     name="madeIn" 
     placeholder="madeIn"
     value={inputs.madeIn}
     onChange={handleChange}
    
     />
    
    
    </div>
    
      
    <div className='contain'>
    
          
    <label >guarantee_period</label>      
    <input type="text"
     name="guarantee_period" 
     placeholder="guarantee period"
     value={inputs.guarantee_period}
     onChange={handleChange}
   
     />
    
    
    </div>
    <div className='contain'>
    
          
    <label >description</label>      
    <input type="text"
     name="description" 
     placeholder="description"
     value={inputs.description}
     onChange={handleChange}
    
     />
    
    
    </div>
    
      
      
    
    
         
      
    
    <button type="submit">submit</button>
     
    </form>)}</div>
    </div>
  )
}

export default EditItems;