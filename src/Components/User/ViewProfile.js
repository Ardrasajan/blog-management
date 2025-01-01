import "../../Assets/Style/ViewProfile.css"
import React, { useState,useEffect } from 'react'
import img from "../../Assets/Images/vecteezy_default-profile-picture-avatar-user-avatar-icon-person_21548095.jpg"
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function ViewProfile() {
    const [viewuser,setviewuser]=useState([]);
    const {id}=useParams();
    console.log(id);
    
    const getDataFromServer=async()=>{
        try{
          
          
          const res=await axios.get(`http://localhost:8000/user/finduser/${id}`);
        
       console.log("resp",res);
       
        if(res.status===200){
          toast.success("user found")
          setviewuser(res.data.data);
        }
        
      }catch(error){
        const msg=error?.response?.data?.message;
        alert(msg);
        console.log("error on finding user",error);}
        
      }
      
  useEffect(() => {
    getDataFromServer();
  }, []);
  console.log(viewuser);
  
    
  return (
    <div className="viewprofile_main">
        <div className="viewprofile_header">
        <nav class="navbar navbar-expand viewprofile_header_main">
          <div class="container-fluid">
            <a class="navbar-brand ps-4 fs-4 fw-bold" href="#">
              <span className="">Blog</span> Management
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedConte nt"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item fw-bold">
                  <a
                    class="nav-link active ms-5"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item ms-5 fw-bold">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    About
                  </a>
                </li>

                <li class="nav-item ms-5 fw-bold">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </a>
                </li>

                <li class="nav-item ms-5 fw-bold">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Users
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form class="d-flex input-form-search" role="search">
            <input
              class="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>

      <div class="viewprofile_card">
  <div class="viewprofile_left_container">
    <img src={img} alt=""/>
    <h2 class="viewprofile_gradienttext">{viewuser.userName}</h2>
    <p>User</p>
  </div>
  <div class="viewprofile_right_container">
    <h3 class="viewprofile_gradienttext">Profile Details</h3>
    <table className="viewprofile_table">
        <tr>
            <td>Name :</td>
            <td>{viewuser.userName}</td>
          </tr>
      <tr>
        <td>User ID :</td>
        <td>{viewuser._id}</td>
      </tr>
      <tr>
        <td>Phone Number :</td>
        <td>{viewuser.phoneNumber}</td>
      </tr>
      <tr>
        <td>Email :</td>
        <td>{viewuser.email}</td>
      </tr>
      <tr>
        <td>Place:</td>
        <td>{viewuser.place}</td>
      </tr>
      <tr>
        <td>City:</td>
        <td>{viewuser.city}</td>
      </tr>
      <tr>
        <td>Date of Birth :</td>
        <td>{viewuser.dateOfBirth}</td>
      </tr>
    </table>
  
  </div>
</div>


    </div>
  )
}

export default ViewProfile