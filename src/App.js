import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserLogin from './Components/User/UserLogin.js';

import AdminLogin from "./Components/Admin/AdminLogin.js";
import AdminDashboard from "./Components/Admin/AdminDashboard.js";
import AdminDashboardContent from "./Components/Admin/AdminDashboardContent.js";
import AdminCategory from "./Components/Admin/AdminCategory.js";

import AdminViewblogs from './Components/Admin/AdminViewblogs.js';
import AdminUsers from './Components/Admin/AdminUsers.js';
import Blog from './Components/Blog.js';
import AdminViewpostLit from './Components/Admin/AdminViewpostLit.js'

import Profile from "./Components/Profile.js";
import RegistrationForm, { Registation } from "./Components/RegistrationForm.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

{/* common routes  */}

        {/* user routes  */}


{/* admin routes  */}
        <Route path="/adminlogin" element={<AdminLogin/>}/> 
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/adminsidebar" element={<AdminDashboard/>}/>
        <Route path="/admindashboard" element={<AdminDashboardContent data='dashboard'/>}/>
        <Route path="/admincreateblogs" element={<AdminDashboardContent data='createblogs'/>}/>
         <Route path="/admincategory" element={<AdminDashboardContent data='category'/>}/>
         <Route path="/adminviewblogs" element={<AdminDashboardContent data='viewblogs'/>}/>
         <Route path="/adminusers" element={<AdminDashboardContent data='users'/>}/>
        <Route path="/Homepage1" element={<Homepage/>}/>

        <Route path="/Blog"element={<Blog/>}/>

        <Route path="/viewpost1" element={<AdminViewpostLit />}/>

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/adminsidebar" element={<AdminDashboard />} />
        <Route path="/viewpost1" element={<AdminViewpostLit />}/>
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
        <Route path="/Homepage1" element={<Homepage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/user/signup" element={<Registation />} />
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
