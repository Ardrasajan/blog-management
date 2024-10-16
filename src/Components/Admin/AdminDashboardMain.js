import React from 'react'
import '../../Assets/Style/AdminDashboardMain.css'
 import { FaSearch } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
 import { FaUsers } from "react-icons/fa"
import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';


function AdminDashboardMain() {
  return (
    <div className='Admin_dashboard_main'>
      { <div className='Admin_dashboard_nav'>
        <div className='header_container'>
          <div className='header_title'>

            <h3>Dashboard</h3>
            </div>
            <div className='header_search'>


              <FaSearch className='icon'/>
              <input type='text' placeholder='Type here..' id='input'/>
              <input type='button' value="search" id='find1'/>
            

          </div>

        </div>
        <div className='Admin_dashboard_rowcontainer'>
          <div class="row g-3 dashboard_row">
            <div class="col-4 dashboard_col">
            <MdLibraryBooks className='dashboardicons'/>
              <div  className="p-2">
              <Link to="/adminviewblogs" id='Admin_dashboard_link'>Blogs</Link></div>
            </div>
            
            <div class="col-4 dashboard_col">
            <FaUsers className='dashboardicons'/>
              <div className="p-2"> 
                <Link to="/adminusers" id='Admin_dashboard_link' >Users</Link></div>
            </div>
            <div class="col-4 dashboard_col">
            <BiSolidCategory className='dashboardicons' />
              <div className="p-2">
              <Link to="/admincategory" id='Admin_dashboard_link'>Categories</Link></div>
            </div>

          </div>

        </div>



      </div> }
    </div>
  )
}

export default AdminDashboardMain