import React, { useState } from "react";
import "../../Assets/Style/AdminCreateBlogs.css";

import { axiosInstance } from "../../api/axiosInstance";

function AdminCreateBlogs() {
  const [blogdata, setblogdata] = useState({
    title: "",
    category: "",
    postContent: "",
    blogImg: {},
  });
  const change = (e) => {
    console.log(e);
    setblogdata({ ...blogdata, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(blogdata);

    const { title, category, postContent } = blogdata;
    // do front-end validation here.
    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      console.log("blog", blogdata);
      const res = await axiosInstance.post("/blog/addblog", blogdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("resp", res);
      if (res.status === 201) {
        alert("Blog added successfully");
      }
    } catch (error) {
      const msg = error?.response?.data?.message;
      alert(msg);
      console.log("err on add blog", error);
    }
  };
  const handleFileChanges = (e) => {
    setblogdata({
      ...blogdata,
      blogImg: e.target.files[0],
    });
  };
  return (
    <div className="Admin_createblog_main">
      <div className="header_create_container">
        <div className="header_title">
          <h5>Add Blogs</h5>
        </div>
      </div>
      <div className="Admin_create_post_contanier">
        <form>
          <lable>Post Title</lable>
          <br></br>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            onChange={change}
          />
          <br></br>
          <label>Category</label>
          <br></br>
          <select name="category" onChange={change}>
            <option value="Sports">Sports</option>
            <option value="Literature">Literature</option>
            <option value="Music">Music</option>
          </select>
          <div className="admin_enter_post">
            <label className="post">Post Content.</label>
            <br></br>
            <textarea name="postContent" onChange={change}></textarea>

            <div className="admin_select_image">
              <label className="feature">Feature Image </label>
              <div className="admin_image_outline">
                <input type="file" onChange={handleFileChanges} />
              </div>
              <button className="image_button" onClick={onSubmit}>
                Save and post
              </button>
              <button className="image_button">Discard</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminCreateBlogs;
