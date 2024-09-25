import React from 'react'
import '../../Assets/Style/AdminDashboardMain.css'
 import { FaSearch } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
 import { FaUsers } from "react-icons/fa"
import { BiSolidCategory } from "react-icons/bi";


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
            <MdLibraryBooks classNa me='dashboardicons'/>
              <div class="p-2 ">Blogs</div>
            </div>
            
            <div class="col-4 dashboard_col">
            <FaUsers className='dashboardicons'/>
              <div class="p-2"> Users</div>
            </div>
            <div class="col-4 dashboard_col">
            <BiSolidCategory className='dashboardicons' />
              <div class="p-2">Categories</div>
            </div>

          </div>

        </div>



      </div> }
    </div>
  )
}

export default AdminDashboardMain