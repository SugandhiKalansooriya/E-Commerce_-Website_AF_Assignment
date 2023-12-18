import React ,{ useEffect, useState }from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "../form.css"

const Add_promotion = () => {
   


    const history = useNavigate();
    const [inputs, setInputs] = useState({
      
      startingdate:"",
      endingdate:"",
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
        .post("http://localhost:5000/promotions", {
            startingdate:String(inputs.startingdate),
            endingdate:String(inputs.endingdate),
           description:String(inputs.description)
         
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(alert("Added the promotion")).then(() => history("/All_promotions"));
    };
  
    
    

  return (
   <div id="form" className='container py-5 h-100'>
<form onSubmit={handleSubmit} >
<h1>Add Promotion Notice</h1>


<div className='container'>      

<label for="startingdate">Starting date</label>
  <input type="date" 
   name="startingdate" 
  placeholder="starting date"
   value={inputs.startingdate}
  onChange={handleChange}
  required/>
  
  
</div>

<div className='container'>      

<label for="endingdate">Starting date</label>
  <input type="date" 
   name="endingdate" 
  placeholder="endingdate"
   value={inputs.endingdate}
  onChange={handleChange}
  required/>
  
</div>

<div class='container'>
    <label for="exampleFormControlTextarea1">description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
    name="description" 
    placeholder="description"
    value={inputs.description}
    onChange={handleChange}
    required>

      </textarea>
  </div>


     <br/>
     <button type="submit">submit</button>
     </form>
     </div>

  
  )
}

export default  Add_promotion;