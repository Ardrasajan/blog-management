import React from 'react'
import "../../Assets/Style/AdminDashboard.css"
import { BiHome } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6"
import { FaBlogger,FaEdit,FaUsers  } from "react-icons/fa"
import { MdDeleteSweep } from "react-icons/md"
import { Link } from 'react-router-dom';
import { VscSignOut } from "react-icons/vsc";

function AdminDashboard() {
  return (
    <div className='Admin_sidebar_component'>
        <div className='Admin_sidebar_container'>
            <h2>BLOG ADMIN</h2>
<div className='Admin_sidebar_list '>
<Link to="/admindashboard" className="item">
  <BiHome className='icons'/>
    Dash Board
  </Link><br></br>
  <Link to="/admincategory" className="item"><FaListUl className='icons'/>Categories</Link><br></br>
  <Link to="/admincreateblogs" className="item"><FaBlogger className='icons'/>Create Blogs</Link><br></br>
  <Link to="/adminviewblogs" className="item"><FaEdit className='icons'/>View Blogs</Link><br></br>
  
  <Link to="/adminusers" className="item"><FaUsers className='icons'/>Users</Link><br></br>
  <Link to="#" className="item"><VscSignOut className='icons'/>LogOut</Link><br></br>
  

</div>
        </div>
    </div>
  )
}

export default AdminDashboard