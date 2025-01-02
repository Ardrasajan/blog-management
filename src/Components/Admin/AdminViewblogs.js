import React, { useEffect, useState } from 'react'
import "../../Assets/Style/AdminViewblogs.css"
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import img from "../../Assets/Images/stories-of-the-true.png"
function AdminViewblogs() {
  const [allblogs,setallblogs]=useState([])
  const getDataFromServer=async()=>{
    try{
      const res=await axios.get("http://localhost:8000/blog/findallblogs");
      console.log("response",res);
      if(res.status===200){
        setallblogs(res.data.data);

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
console.log(allblogs);

  return (
    <div className='Admin_viewblog_container'>
      <div className='Viewblog_title'>
        <h4>View Latest Blogs</h4></div>
      <div className='Admin_second_container'>
        <div className="card_container">
          <div className="container text-center">
            <div className="row rows gx-5">
             
                {
                  allblogs.map((e,index)=>{
                    return(
                      <div className="col-4">
                <div className="card cards mb-4" style={{ minWidth: '10rem', maxHeight: '21rem' }}>
                  <img src={img} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text viewblogs_text">{e.postContent.substring(0,20) +"..."}</p>
                    <Link to="#">
                    <button className='Admin_viewblogs_button'>Read more..</button></Link>
                  </div>
                </div>
                </div>
                  )
                })
}
              </div>
              
              
          
          </div>
          


        </div>
        <div className='admin_view_search'>
          <div className='view_search'>

            <h4>Search Blog..</h4>
            <FaSearch className='icon' />
            <input type='text' placeholder='Type here..' id='inputtext' />
            <input type='button' value="search" id='find' />


          
          <div className='view_categories'>
            <h4>Categories</h4>
            <div class="list-group categorylist">
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


  )
}

export default AdminViewblogs