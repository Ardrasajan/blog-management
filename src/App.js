import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminLogin from './Components/Admin/AdminLogin.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/adminlogin' Component={<AdminLogin/>}/> */}
        
      </Routes>
      <AdminLogin/>
    </BrowserRouter>
  
  );
}

export default App;
