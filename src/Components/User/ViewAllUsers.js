import React from "react";
import "../../Assets/Style/ViewAllUsers.css";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function ViewAllUsers() {
    const [viewallusers,setviewallusers]=useState([])
    const getDataFromServer=async()=>{
        try{
          
          
          const res=await axios.get("http://localhost:8000/user/findallusers");
        
       console.log("resp",res);
       
        if(res.status===200){
          
          setviewallusers(res.data.data);
        }
        
      }catch(error){
        const msg=error?.response?.data?.message;
        alert(msg);
        console.log("error on finding user",error);}
        
      }
      useEffect(()=>{
        getDataFromServer();
      },[])
      console.log(viewallusers);
      
    
  return (
    <div className="user_viewall_main">
      <div className="user_viewall_header">
        <nav class="navbar navbar-expand viewall_header_main">
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
      <div className="user_viewall_body">
        <div className="user_viewall_title">
                <FaUsers className="user_viewall_icon" />
                <h3>Users</h3>
              </div>
              <div className="user_viewall_table_container">
                <table className="table table-striped  table-hover table-group-divider user_viewall_table">
                  <thead >
                    <tr >
                      <th scope="col">S.no</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">City</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {viewallusers.map((e, index) => {
                      return (
                    
                          <tr key={e._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{e.userName}</td>
                            <td>{e.email}</td>
                            <td>{e.city}</td>
                            <td>
                              <Link to={`/user/viewprofile/${e._id}`} className="user_viewall_action">
                              <button className="user_viewall_button">
                                View
                              </button>
                              </Link>
                            </td>
                          </tr>
                        
                      );
                    })}
                  </tbody>
                </table>
              </div>

      </div>
    </div>
  );
}

export default ViewAllUsers;
