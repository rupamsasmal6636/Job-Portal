import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { BiPencil } from 'react-icons/bi';
import { GrFormView } from 'react-icons/gr';

const Home = () => {

  const [jobs,setJobs] = useState([]);

  

  useEffect(() => {
     loadJobs();
  },[]);

 const loadJobs = async () =>{
  const result = await axios.get("http://localhost:8081/jobs");
  setJobs(result.data);
 }

 const deleteJob = async (id) =>{
  await axios.delete(`http://localhost:8081/job/${id}`)
  loadJobs();
 }

  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table table-striped border shadow">
            <thead>
              <tr>
                <th scope="col" className='text-center' style={{width:'5%'}}>jobid</th>
                <th scope="col" className='text-center' style={{width:'10%'}}>role</th>
                <th scope="col" className='text-center' style={{width:'5%'}}>Name</th>
                <th scope="col" className='text-center' style={{width:'20%'}}>description</th>
                <th scope="col" className='text-center' style={{width:'5%'}}>salary</th>
                <th scope="col" className='text-center' style={{width:'15%'}}>postedDate</th>
                <th scope="col" className='text-center' style={{width:'15%'}}>expireDate</th>
                <th scope="col" className='text-center' style={{width:'10%'}}>requirements</th>
                <th scope="col"  className='text-center' style={{ width: '25%' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                jobs.map(job => (
                  <tr key={job.jobid}>
                    <th scope="row">{job.jobid}</th>
                    <td>{job.role}</td>
                    <td>{job.companyName}</td>
                    <td>{job.description}</td>
                    <td>{job.salary}</td>
                    <td>{job.postedDate}</td>
                    <td>{job.expireDate}</td>
                    <td>{job.requirements}</td>
                    <td>
                      <Link to={`/viewjob/${job.jobid}`}>
                        <button className='btn btn-primary mx-2 my-1 opacity-75'>
                          <GrFormView size={24}/>
                        </button>
                      </Link>
                      <Link to={`/editjob/${job.jobid}`}>
                        <button className='btn btn-outline-success mx-2 my-1 opacity-75'>
                          <BiPencil size={24}/>
                        </button>
                      </Link>
                      
                        <button className='btn btn-outline-danger mx-2 my-1 opacity-75'
                                onClick={() => deleteJob(job.jobid)}
                        ><MdDeleteOutline size={24}/>
                        </button>
                    
                    </td>
                  </tr>
                ))
              }
              
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Home