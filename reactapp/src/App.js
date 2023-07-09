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
import Home1 from "./Pages/LandingPage/Components/Home";
import About from "./Pages/LandingPage/Components/About";
import Service from "./Pages/LandingPage/Components/Service";
import Signup from "./Pages/LandingPage/Components/Signup";
import Contact from "./Pages/LandingPage/Components/Contact";
import Login1 from "./Pages/LandingPage/Components/Login";
import JobseekerDashboard from "./Pages/Dashboard/Jobseeker_Dashboard/JobseekerDashboard";
import JobSearchPage from './Pages/JobSearch/JobSearchPage';

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
      {/*  <AdminPage/>  */}
      {/*  <JobDetails/>  */}

     {/*  <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/addjob' element={<AddJob />} />
          <Route path='/editjob/:id' element={<EditJob />} />
          <Route path='/viewjob/:id' element={<ViewJob />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter> */}
      
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter> */}
    
    {/* <JobSearchPage /> */}
    
    <BrowserRouter>
           <JobseekerDashboard />
    </BrowserRouter>
    
    </div>
  );
}
export default App;
