import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import AdminLogin from './Components/Admin/AdminLogin.js';
import UserLogin from './Components/User/UserLogin.js';
import AdminDashboard from './Components/Admin/AdminDashboard.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/Homepage" element={<Homepage/>}/> */}

        {/* <Route path="/adminlogin" Component={<AdminLogin/>}/> */}
        {/* <Route path="/admindashboard" Component={<AdminDashboard/>}/> */}

      </Routes>
       {/* <AdminLogin/>  */}
      {/* <UserLogin/> */}
      <AdminDashboard/>
    </BrowserRouter>
  
  );
}

export default App;
