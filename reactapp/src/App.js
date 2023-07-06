import './App.css';
import JobDetails from './Pages/JobDetails/Components/JobDetails';
import AdminPage from "./Pages/Dashboard/Admin/Admin";
import HomePage from "./Pages/Signuplogindetails/Components/HomePage/HomePage";
import Login from "./Pages/Signuplogindetails/Components/LoginPage/Login";
import SignUpPage from "./Pages/Signuplogindetails/Components/SignUpPage/Signup";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/signup' element ={<SignUpPage/>}/>  
        <Route path='/login' element ={<Login/>}/>
        </Routes>
      </BrowserRouter>
      {/* <AdminPage/> */}
      {/* <JobDetails/> */}
    </div>
  );
}
export default App;
