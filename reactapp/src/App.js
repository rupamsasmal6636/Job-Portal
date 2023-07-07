import './App.css';
import JobDetails from './Pages/JobDetails/Components/JobDetails';
import AdminPage from "./Pages/Dashboard/Admin/Admin";
import HomePage from "./Pages/Signuplogindetails/Components/HomePage/HomePage";
import Login from "./Pages/Signuplogindetails/Components/LoginPage/Login";
import SignUpPage from "./Pages/Signuplogindetails/Components/SignUpPage/Signup";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from './Pages/PostJobAndEditJob/components/Navbar';
import Home from './Pages/PostJobAndEditJob/components/Home.js';
import AddJob from './Pages/PostJobAndEditJob/jobs/AddJob.js';
import EditJob from './Pages/PostJobAndEditJob/jobs/EditJob.js';
import ViewJob from './Pages/PostJobAndEditJob/jobs/ViewJob.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      
      {/* <BrowserRouter>
        <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/signup' element ={<SignUpPage/>}/>  
        <Route path='/login' element ={<Login/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <AdminPage/> */}
      {/* <JobDetails/> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addjob' element={<AddJob />} />
          <Route path='/editjob/:id' element={<EditJob />} />
          <Route path='/viewjob/:id' element={<ViewJob />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}
export default App;
