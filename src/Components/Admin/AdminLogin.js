import React from 'react'
import "../../Assets/Style/adminlogin.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


function AdminLogin() {
  return (
    <div className='Admin_login_component'>
      <div className='Admin_login_container'>
        <div className='Admin_login_form'>
          <form>
            <h1>Admin Login</h1>
            <div className='Admin_login_input'>
              <input type='text' placeholder='username' required/>
              <FaUser className='Admin_login_icon'/>
              </div>
              <div className='Admin_login_input'>
                <input type='password' placeholder='password' required/>
                <FaLock className='Admin_login_icon'/>
                </div>
                <div className='Admin_login_remember'>
                  <label>
                    <input type="checkbox"/>Remember me
                  </label>
                  <a href="#">Forgot password?</a>
                  </div>
                  <button type="submit">login</button>
                  
          </form>

        </div>

      </div>

    </div>
  )
}

export default AdminLogin