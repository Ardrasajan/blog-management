import React from "react";
import "../../Assets/Style/AdminUsers.css";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";

import { axiosInstance } from "../../api/axiosInstance";
import { BASE_URL } from "../../api/api";
import { useNavigate } from "react-router-dom";
function AdminUsers() {
  const navigate=useNavigate();
  const [allusers, setallusers] = useState([]);
  const [fixedUsers, setfixedUsers] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
  if (!value) {
    setallusers(fixedUsers)
  }
    const newArr = fixedUsers.filter((u) => {
      const name = u.userName.toLowerCase();
      return name.includes(value);
    });

    setallusers(newArr)
  };

  const getDataFromServer = async (token) => {
    try {
      const res = await axiosInstance.get("/user/findallusers",{
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("resp", res);

      if (res.status === 200) {
        const data = res.data?.data || [];
        setallusers(data);
        setfixedUsers(data);
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      alert(msg);
      console.log("error on finding user", error);
    }
  };

  useEffect(() => {
    const tokenId=localStorage.getItem("blog-management-token")
    if(tokenId){
      getDataFromServer(tokenId);
    
    }
    else{
      navigate("/user/login")
    }
         
  }, []);
  console.log(allusers);

  return (
    <div className="AdminUsers_main">
      <div className="AdminUsers_title">
        <FaUsers className="AdminUsers_icon" />
        <h3>Users</h3>
        <input type="text" onChange={handleChange} />
      </div>
      <div className="AdminUsers_table_container">
        <table className="table table-striped table-success table-hover table-group-divider AdminUsers_table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((e, index) => {
              return (
                <tr key={e._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{e.userName}</td>
                  <td>{e.email}</td>
                  <td>{e.city}</td>
                  <td>
                    <Link
                      to={`/adminuserprofile/${e._id}`}
                      className="btn btn-info"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;
