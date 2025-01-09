import React from "react";
import "../../Assets/Style/AdminViewOneBlog.css";
// import img from "../../Assets/Images/stories-of-the-true.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";
import {BASE_URL} from "../../api/api"
import { axiosInstance } from "../../api/axiosInstance";

function AdminViewOneBlog() {

    const [singleblog,setsingleblog]=useState([])
    const {id}=useParams();
    console.log("ID",id);
    let blogImg = `${BASE_URL}/${singleblog.blogImg}`
    console.log('blo',blogImg);
    
    const getDataFromServer=async()=>{
      try{
        const res=await axiosInstance.get(`/blog/findblog/${id}`);
        console.log("response",res);
        if(res.status===200){
          toast.success("Blog found")
          setsingleblog(res.data.data);
  
        }
        
      }catch(error){
        const msg=error?.response?.data?.message;
        alert(msg);
        console.log("error on finding blogs",error);
        
      }
    }
    useEffect(()=>{
      getDataFromServer();
  
    },[])
  console.log(singleblog);
  
  return (
    
    <div className="Admin_viewoneblog_container">
      <div className="Admin_viewoneblog_second_container">
        <div className="Admin_viewoneblog_card_container">
          {/* <h3>The Ultimate Guide to Indie Music</h3> */}
          <div
            class="card Admin_viewoneblog_card"
            style={{ minWidth: "52rem", minHeight: "680px" }}
          >
           <div className="Admin_viewoneblog_card_img">
            <img src={blogImg} class="card-img-top" alt="..." /></div>
            <div class="card-body">
              <h4 class="card-title">{singleblog.title}</h4>
              <h6 class="card-title"><span>Category:{singleblog.category}</span></h6>
              <p class="card-text">
                {singleblog.postContent}
              </p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
        <div className="Admin_viewoneblog_search_container">
<div className='Admin_viewoneblog_search'>

            <h4>Search Blog..</h4>
            <FaSearch className='icon' />
            <input type='text' placeholder='Type here..' id='inputtext' />
            <input type='button' value="search" id='find' />


          
          <div className='Admin_viewoneblog_search_categories'>
            <h4>Categories</h4>
            <div class="list-group Admin_viewoneblog_search_categorylist">
              <Link to="#" class="list-group-item list-group-item-action Linkview">Literature(1)</Link>

              <Link to="#" class="list-group-item list-group-item-action Linkview">Health and wellness(2)</Link>
              <Link to="#" class="list-group-item list-group-item-action Linkview">Music(4)</Link>
              <Link to="#" class="list-group-item list-group-item-action Linkview">Food(2)</Link>
              <Link to="#" class="list-group-item list-group-item-action Linkview">Sports(3)</Link>
              <Link to="#" class="list-group-item list-group-item-action Linkview">Technology(8)</Link>
              
            </div>


          </div>
          </div>






        </div>
      </div>
    </div>
  );
}

export default AdminViewOneBlog;
