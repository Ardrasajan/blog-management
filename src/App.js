import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminLogin from './Components/Admin/AdminLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' Component={<AdminLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
