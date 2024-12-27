import React from "react";
import "../../Assets/Style/UserLogin.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function UserLogin() {
  const navigate = useNavigate();

  const [logindata, setlogindata] = useState({
    userName: "",
    password: "",
  });
  const change = (e) => {
    console.log(e);
    setlogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(logindata);
    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/user/login",
        logindata
      );
      console.log("resp", res);
      if (res.status === 200) {
        toast.success("Login sucessfully");
        navigate("/Homepage1");
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      alert(msg);
      console.log("err on login", error);
    }
  };

  return (
    <div className="user_login_component">
      <div className="user_login_container">
        <div className="User_login_form">
          <form>
            <h1>User Login</h1>
            <div className="User_login_input">
              <input
                type="text"
                placeholder="userName"
                required
                name="userName"
                onChange={change}
              />
              <FaUser className="user_login_icon" />
            </div>
            <div className="User_login_input">
              <input
                type="password"
                placeholder="password"
                required
                name="password"
                onChange={change}
              />
              <FaLock className="user_login_icon" />
            </div>
            <div className="user_login_remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="#">Forgot password?</Link>
            </div>
            <button type="submit" onClick={onSubmit}>
              Login
            </button>
            <div className="user_login_register">
              <p>
                <Link to="/user/signup"> Don't have an account?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
