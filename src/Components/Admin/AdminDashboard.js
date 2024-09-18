import React from 'react'
import "../../Assets/Style/AdminDashboard.css"
import { BiHome } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6"
import { FaBlogger,FaEdit,FaUsers  } from "react-icons/fa"
import { MdDeleteSweep } from "react-icons/md"

function AdminDashboard() {
  return (
    <div className='Admin_sidebar_component'>
        <div className='Admin_sidebar_container'>
            <h5>Blog<br></br> Management</h5>
<div className='Admin_sidebar_list '>
<a href="#" className="item">
  <BiHome className='icons'/>
    Dash Board
  </a><br></br>
  <a href="#" className="item"><FaListUl className='icons'/>Categories</a><br></br>
  <a href="#" className="item"><FaBlogger className='icons'/>Create Blogs</a><br></br>
  <a href="#" className="item"><FaEdit className='icons'/>Edit Blogs</a><br></br>
  <a href="#" className="item"><MdDeleteSweep className='icons'/>Delete Blogs</a><br></br>
  <a href="#" className="item"><FaUsers className='icons'/>Subscribers</a><br></br>
  

</div>
        </div>
    </div>
  )
}

export default AdminDashboard