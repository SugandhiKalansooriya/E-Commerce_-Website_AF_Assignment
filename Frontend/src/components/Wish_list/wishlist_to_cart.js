import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import "../form.css"
const WishList_toCart = () => {

  const [inputs, setInputs] = useState({});
  const id =useParams().id;
  const history = useNavigate();


  useEffect(() => {
  const fetchHandler = async () => {
    await axios
      .get(`http://localhost:5000/wish_list/${id}`)
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
        .post(`http://localhost:5000/cart_items`, {
            
        productname:String(inputs.productname),
        price:String(inputs. price),
        Quantity:String(inputs.Quantity)
        
         
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(alert("Added to cart")).then(() => history("/"));
    };

  return (

   
    <div id='form' className='container py-5 h-100' > 
     {inputs && (<form onSubmit={handleSubmit} >
    <h1> Add  to Cart</h1>
      
    
    
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
    
          
    <label > Quantity</label>      
    <input type="number"
     name="Quantity" 
     value={inputs.Quantity}
     onChange={handleChange}
    
     />
    
    
    </div>
    
    <button type="submit">add to cart </button>
     
    </form>)}</div>
    


   
  )
}

export default WishList_toCart;