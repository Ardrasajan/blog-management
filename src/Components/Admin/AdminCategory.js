import React from 'react'
import '../../Assets/Style/AdminCategory.css'
import { Link } from 'react-router-dom'


function AdminCategory() {
  return (
    <div className='AdminCategory_container'>
      <div className='AdminCategory_title'> 
        <h3>Categories</h3>

      </div>
      <div className='AdminCategory_header'>
        <h4> All (363)</h4>
        <input type='date'/>
        <select name='category' className='AdminCatergory_select'>
              <option value='category1'>Literature</option>
              <option value='category2'>Health and wellness</option>
              <option value= 'category3'>Music</option>
              <option value='category4'>Food</option>
              <option value='category5'>Sports</option>
              <option value= 'category6'>Technology</option>

            </select>
            <Link to='#' className='btn Admin_add_category'>Add Category</Link>
            </div>
            <div className='AdminCategory_table_container'>
            <table className='table  table-group-divider table-hover table-striped AdminCategory_table'>
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Categories</th>
      <th scope="col">Date published</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Yoga for all</td>
      <td>Admin</td>
      <td>Health and wellness</td>
      <td>8-9-2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Writer B Jeyamohan</td>
      <td>Thornton</td>
      <td>Literature</td>
      <td>9-10-2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Futuristic technology</td>
      <td>Mark</td>
      <td>Technology</td>
      <td>21-5-2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Music for soul</td>
      <td>Admin</td>
      <td>Music</td>
      <td>2-7-2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Travel alone</td>
      <td>Otto</td>
      <td>Travel</td>
      <td>26-2-2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Best italian food receipes</td>
      <td>Otto</td>
      <td>Food</td>
      <td>11-5-2024</td>
      <td><Link to='#' className="btn btn-info" >View</Link></td>
    </tr>
    
  </tbody>
</table>

           
      </div>
      
    </div>
  )
}

export default AdminCategory