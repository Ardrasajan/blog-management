import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import AdminLogin from './Components/Admin/AdminLogin.js';
import UserLogin from './Components/User/UserLogin.js';
import AdminDashboard from './Components/Admin/AdminDashboard.js';
import AdminDashboardContent from './Components/Admin/AdminDashboardContent.js';
import AdminCategory from './Components/Admin/AdminCategory.js';


import AdminViewblogs from './Components/Admin/AdminViewblogs.js';
import AdminUsers from './Components/Admin/AdminUsers.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Homepage" element={<Homepage/>}/>

        <Route path="/adminlogin" element={<AdminLogin/>}/> 
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/adminsidebar" element={<AdminDashboard/>}/>
        <Route path="/admindashboard" element={<AdminDashboardContent data='dashboard'/>}/>
        <Route path="/admincreateblogs" element={<AdminDashboardContent data='createblogs'/>}/>
         <Route path="/admincategory" element={<AdminDashboardContent data='category'/>}/>
         <Route path="/adminviewblogs" element={<AdminDashboardContent data='viewblogs'/>}/>
         <Route path="/adminusers" element={<AdminDashboardContent data='users'/>}/>
        <Route path="/Homepage1" element={<Homepage/>}/>
      </Routes>
       {/* <AdminLogin/>  */}
      {/* <UserLogin/> */}
      {/* <AdminDashboard/> */}
      {/* <AdminDashboardContent/> */}
      
      {/* <AdminViewblogs/> */}
      {/* <AdminUsers/> */}
      
    </BrowserRouter>
  
  );
}

export default App;
