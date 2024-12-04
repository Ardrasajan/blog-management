
import "../Assets/Style/Registration.css";
import React,{useState} from 'react'

function RegistrationForm() {
  const [data,setData] =useState({
    name: "",
    password:"",
    email:"",

  })
  const change=(e)=>{console.log(e);
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div className="registration-form">
     
      <form  class="row g-3 needs-validation form" >
        <h2>Register for Blog Management</h2>
        <div class="col-md-4">
          <label for="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required />
          <br />
        </div>
        <div class="col-md-6">
          <label for="password">password:</label>
          <br />
          <input type="password" id="password" name="password" required />
          <br />
        </div>
        <div>
          <label for="email">email:</label>
          <br />
          <input type="email" id="email" name="email" required />
          <br />
        </div>
       
        <div>
          <p>
            Don't have an account?
            <a href="#">Register</a>
          </p>
        </div>
      </form>
      
    </div>
  );
}

export default RegistrationForm;
