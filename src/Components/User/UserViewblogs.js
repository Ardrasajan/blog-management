import React from 'react'
import "../../Assets/Style/UserViewblogs.css"

import { Link, useNavigate } from "react-router-dom";
// import { FaUsers } from "react-icons/fa";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { BASE_URL } from "../../api/api";
import { FaSearch } from "react-icons/fa";

function UserViewblogs() {
    const [allblogs, setallblogs] = useState([]);
      const [fixedblogs, setfixedblogs] = useState([]);
      const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        if (!value) {
          setallblogs(fixedblogs);
        }
        const newArr = fixedblogs.filter((u) => {
          const name = u.title.toLowerCase();
          return name.includes(value);
        });
        setallblogs(newArr);
      };
    
      const getDataFromServer = async () => {
        try {
          const res = await axiosInstance.get("/blog/findallblogs");
          console.log("response", res);
          if (res.status === 200) {
            // setallblogs(res.data.data);
            const data = res.data?.data || [];
            setallblogs(data);
            setfixedblogs(data);
          }
        } catch (error) {
          const msg = error?.response?.data?.message;
          alert(msg);
          console.log("error on finding blogs", error);
        }
      };
      useEffect(() => {
        getDataFromServer();
      }, []);
      console.log(allblogs);
  return (
    <div className="user_viewallblogs_main">
<div className="user_viewallblogs_header">
        <nav class="navbar navbar-expand viewallblogs_header_main">
          <div class="container-fluid">
            <Link class="navbar-brand ps-4 fs-4 fw-bold" to="/Homepage1">
              <span className="">Blog</span> Management
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedConte nt"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item fw-bold">
                  <Link
                    class="nav-link active ms-5"
                    aria-current="page"
                    to="/Homepage1"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item ms-5 fw-bold">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="#"
                  >
                    About
                  </Link>
                </li>

                <li class="nav-item ms-5 fw-bold">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="#"
                  >
                    Blog
                  </Link>
                </li>

                <li class="nav-item ms-5 fw-bold">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/user/viewall"
                  >
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
      </div>


<div className='user_viewallblogs_blogscontainer'>
<div className="user_viewallblogs_card_container">
          <div className="container text-center">
            <div className="row rows gx-5">
              {allblogs.map((e, index) => {
                let blogImg = `${BASE_URL}/${e.blogImg}`;
                console.log("blo", blogImg);
                return (
                  <div className="col-4">
                    <div
                      className="card cards mb-4"
                      style={{ minWidth: "10rem", maxHeight: "21rem" }}
                    >
                      <img src={blogImg} className="card-img-top" alt="" />
                      <div className="card-body">
                        <h5 className="card-title">{e.title}</h5>
                        <p className="card-text viewblogs_text">
                          {e.postContent?.substring(0, 20) + "..."}
                        </p>
                        <Link to={`/adminviewoneblog/${e._id}`}>
                          <button className="user_viewallblogs_button">
                            Read more..
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
</div>


<div className="user_view_search">
          <div className="user_viewall_search">
            <h4>Search Blog..</h4>
            <FaSearch className="icon" />
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Type here.."
              id="inputtext"
            />
            <input type="button" value="search" id="find" />

            <div className="view_categories">
              <h4>Categories</h4>
              <div class="list-group user_categorylist">
                <Link
                  to="#"
                  class="list-group-item list-group-item-action Linkview"
                >
                  Literature(1)
                </Link>

                <Link
                  to="#"
                  class="list-group-item list-group-item-action Linkview"
                >
                  Health and wellness(2)
                </Link>
                <Link
                  to="#"
                  class="list-group-item list-group-item-action Linkview"
                >
                  Music(4)
                </Link>
                <Link
                  to="#"
                  class="list-group-item list-group-item-action Linkview"
                >
                  Food(2)
                </Link>
                <Link
                  to="#"
                  class="list-group-item list-group-item-action Linkview"
                >
                  Sports(3)
                </Link>
                <Link
                  to="#"
                  class="list-group-item list-group-item-action Linkview"
                >
                  Technology(8)
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
</div>
)
}

export default UserViewblogs