import React from 'react'
import '../../Assets/Style/AdminUsers.css'
import { Link } from 'react-router-dom'
import { FaUsers } from "react-icons/fa";

function AdminUsers() {
  return (
    <div className='AdminUsers_main'>
      <div className='AdminUsers_title'>
      <FaUsers className='AdminUsers_icon'/>
        <h3>Users</h3>

      </div>
      <div className='AdminUsers_table_container'>
      <table className='table table-striped table-success table-hover table-group-divider AdminUsers_table'>
      <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Date Added</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Mark@gmail.com</td>
      <td>14/8/2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Jacob@gmail.com</td>
      <td>3/9/2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Thornton</td>
      <td>Thornton@twitter</td>
      <td>15/9/2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >Larry</td>
      <td>Larry@twitter</td>
      <td>20/11/2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
  </tbody>
  </table>

      </div>
    </div>
  )
}

export default AdminUsers