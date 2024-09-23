import React from 'react'
import '../../Assets/Style/AdminCreateBlogs.css'

function AdminCreateBlogs() {
  return (
    <div className='Admin_createblog_main'>
      <div className='header_create_container'>
        <div className='header_title'>
          <h5>Add Blogs</h5>

        </div>
        </div>
        <div className='Admin_create_post_contanier'>
          <form>
            <lable>post title</lable><br></br>
            <input type='text'  placeholder='Enter title'/><br></br>
            <label>Category</label><br></br>
            <select name='category'>
              <option value='category1'>category1</option>
              <option value='category2'>category2</option>
              <option value= 'category3'>category3</option>

            </select>
            <div className='admin_enter_post'>
              <label className='post'>post Details</label><br></br>
              <textarea ></textarea>
         
            <div className='admin_select_image'>
              <label className='feature'>Feature Image </label>
              <div className='admin_image_outline'>
                <button>Choose File</button>No File chosen 

              </div>
              <button className='image_button'>Save and post</button>
              <button className='image_button'>Discard</button>
            </div>

            </div>

          </form>

        </div>

      
    </div>
  )
}

export default AdminCreateBlogs