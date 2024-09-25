import React from 'react'
import "../../Assets/Style/UserLogin.css"
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";

function UserLogin() {
  return (
    <div className='user_login_component' >
      <div className='user_login_container' >
      <div className='User_login_form'>
        <form>
          <h1>User Login</h1>
          <div className='User_login_input'>
            <input type='text' placeholder='username' required />
            {/* <FaUser className='user_login_icon' /> */}
          </div>
          <div className='User_login_input'>
            <input type='password' placeholder='password' required />
            {/* <FaLock className='user_login_icon' /> */}
          </div>
          <div className='user_login_remember'>
            <label><input type='checkbox' /> Remember me</label>
            <a href='#'>Forgot password?</a>
          </div>
          <button type='submit'>Login</button>
          <div className='user_login_register'>
            <p>
              Don't have an account?
              <a href='#'>Register</a>
            </p>

          </div>
        </form>


      </div>
    </div>
    </div>
  )
}

export default UserLogin