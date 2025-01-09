import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserLogin from "./Components/User/UserLogin.js";

import AdminLogin from "./Components/Admin/AdminLogin.js";
import AdminDashboard from "./Components/Admin/AdminDashboard.js";
import AdminDashboardContent from "./Components/Admin/AdminDashboardContent.js";
import AdminCategory from "./Components/Admin/AdminCategory.js";

import AdminViewblogs from "./Components/Admin/AdminViewblogs.js";
import AdminUsers from "./Components/Admin/AdminUsers.js";
import Blog from "./Components/Blog.js";
import AdminViewOneBlog from "./Components/Admin/AdminViewOneBlog.js";

import Profile from "./Components/Profile.js";
// import RegistrationForm, { Registation } from "./Components/RegistrationForm.js";
import Registation from "./Components/RegistrationForm.js";
import ViewAllUsers from "./Components/User/ViewAllUsers.js";
import { Toaster } from "react-hot-toast";
import ViewProfile from "./Components/User/ViewProfile.js";
import UserViewblogs from "./Components/User/UserViewblogs.js";

import AdminUserProfile from "./Components/Admin/AdminUserProfile.js";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* common routes  */}
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage1" element={<Homepage />} />
        <Route path="/Blog" element={<Blog />} />

        {/* user routes  */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<Registation />} />
        <Route path="/user/viewall" element={<ViewAllUsers />} />
        <Route path="/user/viewprofile/:id" element={<ViewProfile />} />
        <Route path="/user/viewallblogs" element={<UserViewblogs/>}/>
    

        {/* admin routes  */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsidebar" element={<AdminDashboard />} />
        <Route
          path="/admindashboard"
          element={<AdminDashboardContent data="dashboard" />}
        />
        <Route
          path="/admincreateblogs"
          element={<AdminDashboardContent data="createblogs" />}
        />
        <Route
          path="/admincategory"
          element={<AdminDashboardContent data="category" />}
        />
        <Route
          path="/adminviewblogs"
          element={<AdminDashboardContent data="viewblogs" />}
        />
        <Route
          path="/adminusers"
          element={<AdminDashboardContent data="users" />}
        />
        <Route
        path="/adminuserprofile/:id"
        element={<AdminDashboardContent data="userprofile"/>}/>

       

        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="/adminsidebar" element={<AdminDashboard />} />
       
        <Route
          path="/admindashboard"
          element={<AdminDashboardContent data="dashboard" />}
        />
        <Route
          path="/admincreateblogs"
          element={<AdminDashboardContent data="createblogs" />}
        />
        <Route
          path="/admincategory"
          element={<AdminDashboardContent data="category" />}
        />
        <Route
          path="/adminviewblogs"
          element={<AdminDashboardContent data="viewblogs" />}
        />
        <Route
          path="/adminusers"
          element={<AdminDashboardContent data="users" />}
        />
<Route path="/adminviewoneblog/:id" element={<AdminDashboardContent data="viewoneblog"/>}/>
       

        {/* <Route path="/todo"element={<LearnLs/>}/> */}
      </Routes>
      {/* <AdminLogin/>  */}
      {/* <UserLogin/> */}
      {/* <AdminDashboard/> */}
      {/* <AdminDashboardContent/> */}

      {/* <AdminViewblogs/> */}
      {/* <AdminUsers/> */}

      {/* < AdminViewpostLit/> */}
      {/* <AdminCategory/> */}
    </BrowserRouter>
  );
}

export default App;
