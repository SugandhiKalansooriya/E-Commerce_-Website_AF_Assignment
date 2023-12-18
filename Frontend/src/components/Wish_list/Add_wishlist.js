import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import { useNavigate,useParams  } from "react-router-dom";
import "../form.css"

const Add_WishList = () => {
   
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
        .post("http://localhost:5000/wish_list/", {
            
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
      sendRequest().then(() => history("/"));
    };
  
    
    

  return (

   
    <div id='form' className='container py-5 h-100' > 
     {inputs && (<form onSubmit={handleSubmit} >
    <h1> Add  to Wish list </h1>
      
    
    
    <div className='contain'>
    
          
    <label >productname</label>      
    <input type="text"
     name="productname" 
     value={inputs.productname}
     onChange={handleChange}
     disabled
    
     />
    
    
    </div>
    
    <div className='contain'>
    
          
    <label >price</label>      
    <input type="text"
     name="price" 
     value={inputs.price}
     onChange={handleChange}
     disabled
     
     />
    
    
    </div>
    
    <div className='contain'>

      
<label > Country</label>      
<input type="text"
 name="madeIn" 
 placeholder="Made In"
 value={inputs.madeIn}
 onChange={handleChange}
 disabled
 />


</div>

  
<div className='contain'>

      
<label >guarantee_period</label>      
<input type="text"
 name="guarantee_period" 
 placeholder="guarantee period"
 value={inputs.guarantee_period}
 onChange={handleChange}
 disabled
 />


</div>
<div className='contain'>

      
<label >description</label>      
<input type="text"
 name="description" 
 placeholder="description"
 value={inputs.description}
 onChange={handleChange}
 disabled
 />
    </div>
    <button type="submit">add to wish list </button>
     
    </form>)}</div>
    


   
  )
}

export default  Add_WishList;