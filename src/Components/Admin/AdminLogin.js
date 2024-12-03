import React from "react";
import "../../Assets/Style/AdminLogin.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className="Admin_login_component">
      <div className="Admin_login_container">
        <div className="Admin_login_form">
          <form className="Admin_form">
            <h1 className="Admin_h1">Admin Login</h1>
            <div className="Admin_login_input">
              <input
                type="text"
                placeholder="username"
                required
                className="Admin_input"
              />
              <FaUser className="Admin_login_icon" />
            </div>
            <div className="Admin_login_input">
              <input
                type="password"
                placeholder="password"
                required
                className="Admin_input"
              />
              <FaLock className="Admin_login_icon" />
            </div>
            <div className="Admin_login_remember">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="#">Forgot password?</Link>
            </div>
            <button type="submit">login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
