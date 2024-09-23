import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage1" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
