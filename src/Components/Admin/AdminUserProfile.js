import "../../Assets/Style/AdminUserProfile.css";
import React from "react";
import img from "../../Assets/Images/girl-working-computer-image.avif";

import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import {BASE_URL} from "../../api/api"
import { axiosInstance } from "../../api/axiosInstance";


function AdminUserProfile() {
  const [adminuser,setadminuser]=useState([]);
    const {id}=useParams();
    console.log(id);
    let userImg = `${BASE_URL}/${adminuser.userImg}`
    
    const getDataFromServer=async()=>{
        try{
          
          
          const res=await axiosInstance.get(`/user/finduser/${id}`);
        
       console.log("resp",res);
       
        if(res.status===200){
          toast.success("user found")
          setadminuser(res.data.data);
        }
        
      }catch(error){
        const msg=error?.response?.data?.message;
        alert(msg);
        console.log("error on finding user",error);}
        
      }
      
  useEffect(() => {
    getDataFromServer();
  }, []);
  console.log(adminuser);
  return (
    <div className="Admin_user_profile_container">
      <div className="Admin_user_profile_image_container">
        <img src={userImg} className=" Admin_user_profile_image" alt="..." />
      </div>
      <div className="Admin_user_profile_info_container">
        <div className="Admin_user_profile_info_table1">
          <table class="Admin_user_profile_table1">
            <tbody>
              <tr>
                <th scope="row">User Name</th>
                <td>{adminuser.userName}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth</th>
                <td>{adminuser.dateOfBirth}</td>
              </tr>
              <tr>
                <th scope="row">Gender</th>
                <td>{adminuser.gender}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{adminuser.email}</td>
              </tr>
              <tr>
                <th scope="row">Phone number</th>
                <td>{adminuser.phoneNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Admin_user_profile_info_table2">
        <table class="Admin_user_profile_table2">
            <tbody>
              <tr>
                <th scope="row">Place</th>
                <td>{adminuser.place}</td>
              </tr>
              <tr>
                <th scope="row">City</th>
                <td>{adminuser.city}</td>
              </tr>
              <tr>
                <th scope="row">State</th>
                <td>{adminuser.state}</td>
              </tr>
              <tr>
                <th scope="row">UserID</th>
                <td>J{adminuser._id}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUserProfile;
