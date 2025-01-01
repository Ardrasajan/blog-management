import React from "react";
import "../../Assets/Style/AdminUsers.css";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminUsers() {
  const [allusers, setallusers] = useState([]);
const getDataFromServer=async()=>{
  try{
    
    
    const res=await axios.get("http://localhost:8000/user/findallusers");
  
 console.log("resp",res);
 
  if(res.status===200){
    toast.success("users found")
    setallusers(res.data.data);
  }
  
}catch(error){
  const msg=error?.response?.data?.message;
  alert(msg);
  console.log("error on finding user",error);}
  
}



  useEffect(() => {
    getDataFromServer();
  }, []);
  console.log(allusers);
  


  

  return (
    <div className="AdminUsers_main">
      <div className="AdminUsers_title">
        <FaUsers className="AdminUsers_icon" />
        <h3>Users</h3>
      </div>
      <div className="AdminUsers_table_container">
        <table className="table table-striped table-success table-hover table-group-divider AdminUsers_table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((e, index) => {
              return (
            
                  <tr key={e.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{e.userName}</td>
                    <td>{e.email}</td>
                    <td>{e.city}</td>
                    <td>
                      <Link to="#" className="btn btn-info">
                        View
                      </Link>
                    </td>
                  </tr>
                
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;
