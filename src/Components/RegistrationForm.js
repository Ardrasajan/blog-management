import "../Assets/Style/Registration.css";

import img from "../Assets/Images/img1.jpg";

import React, { useState } from "react";
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";

function Registation() {
  const navigate = useNavigate();
  const [Signupdata, setSignupdata] = useState({
    userName: "",
    email: "",

    password: "",
    confirmPassword: "",
    phoneNumber: "",
    place: "",
    city: "",
    state: "",
    dateOfBirth: "",
    gender: "",
  });
  const change = (e) => {
    console.log(e);
    setSignupdata({ ...Signupdata, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
   


    console.log(Signupdata);

    const {
      userName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      place,
      city,
      state,
      dateOfBirth,
      gender,
    } = Signupdata;
    if (
      !userName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !place ||
      !city ||
      !dateOfBirth ||
      !gender ||
      !state
    ) {
      alert("All fields required");
    }
    
    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post(
        "/user/adduser",
        Signupdata
      );

      console.log("resp", res);

      if (res.status === 201) {
        toast.success('Signup successfully')
       

       
        navigate("/user/login"); 
        
      
      }
     
    } catch (error) {
      const msg = error?.response?.data?.message;
      alert(msg);
      console.log("err on add user", error);
    }
  };

  return (
    // done- include navbar with blog mgmt on left...home,signin,signout on rightside
    //navigate to sign in page
    // need to design forget password page....email,password, newpassword
    //done-connect with backend
    <div className="user_signup_main">
      <nav className="navbar navbar-expand-lg  signup_navbar">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 ms-2 fw-bold ps-4" to="/Homepage1">
            Blog Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_blog_item">
              <li className="nav-item me-5 fw-bold">
                <Link to="/Homepage1" className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                <Link href="#" className="nav-link" to="#">
                  About
                </Link>
          
              </li>
              <li className="nav-item me-5 fw-bold">
              <Link className="nav-link" to="/user/login">
                  Login
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                <Link className="nav-link" to="/user/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item me-5 fw-bold">
                
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      <div className="row blog-signUp  ">
        <div className="col-6 blog-signUp-leftBox">
          <div className="blog-signUp-leftBox-content">
            {/* <h1>Blog Management</h1><br></br> */}
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-6 blog-signUp-rightBox ">
          <div className="blog-signUp-inputBox shadow">
            <h4 className="my-4 header">Sign Up</h4>
            <form action="">
              <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="userName"
                    onChange={change}
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email id here"
                    name="email"
                    onChange={change}
                  />
                </div>
              </div>
              <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">Date of Birth</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="dob"
                    name="dateOfBirth"
                    onChange={change}
                  />
                </div>
                <div className="col">
                  <label>Select the Gender:</label>
                  <br></br>
                  <select
                    name="gender"
                    className="form-control user_signup_select"
                    onChange={change}
                  >
                    <option value="male" name="gender" onChange={change}>
                      Male
                    </option>
                    <option value="female" name="gender" onChange={change}>
                      Female
                    </option>
                  </select>
                </div>
              </div>
              <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">place</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="place"
                    name="place"
                    onChange={change}
                  />
                </div>
                <div className="col">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="city"
                    onChange={change}
                  />
                </div>
              </div>
              <div className="row my-3 mx-2">
                <div className="col">
                  <label>select state</label>
                  <br></br>
                  <select
                    name="state"
                    className="form-control user_signup_select"
                    onChange={change}
                  >
                    <option value="TamilNadu" name="state" onChange={change}>
                      TamilNadu
                    </option>
                    <option value="Kerala" name="state" onChange={change}>
                      Kerala
                    </option>
                    <option value="Karnataka" name="state" onChange={change}>
                      Karnataka
                    </option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="">Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="phone number"
                    name="phoneNumber"
                    onChange={change}
                  />
                </div>
              </div>
              <div className="row my-3 mx-2">
                <div className="col">
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={change}
                  />
                </div>
                <div className="col">
                  <label htmlFor="">Confirm password</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    onChange={change}
                  />
                </div>
              </div>
              {/* <div className="profile_picture_container">
                <div className="profile_picture_preview">
                <img id="user-image" src="" alt="" />

                </div>
                <input type="file" id="image-upload" />



              </div> */}

              <button
                className="blog-signUp-inputBox-btn my-3"
                onClick={onSubmit}
              >
                Sign Up
              </button>
              <div className="user_signup_forgetpassword">
                
                <Link to="/user/login" className="my-3 ">
                  Already have an account? Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registation;
