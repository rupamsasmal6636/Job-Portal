import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

const EditJob = () => {

  let navigate = useNavigate()

  const {id} = useParams()

  const [job,setJob] = useState({
        
    companyName: "",
    role: "",
    requirements: "",
    description: "",
    location: "",
    salary: "",
    postedDate: new Date().toISOString().split('T')[0],
    expireDate: ""
  })

  const changeHandler = (e) => {
    const { name, value } = e.target;

    
      setJob((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    
  };


  const submitHandler = async (e) => {
    e.preventDefault()
    const formattedJob = {
      ...job,
      postedDate: formatDate(job.postedDate),
      expireDate: formatDate(job.expireDate),
    };
    try {
      await axios.put(`http://localhost:8081/job/${id}`, formattedJob);
      toast.success("updated successfully",{
        autoClose:2000
      })
      navigate('/');
    } catch (error) {
      
      console.error("Error occurred:", error);
    }
    
  };
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
  };

  const loadAJob = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:8081/job/${id}`);
      const { expireDate, ...otherData } = result.data;
      setJob((prevJob) => ({
        ...prevJob,
        ...otherData,
        expireDate: formatDate(expireDate),
        postedDate: new Date().toISOString().split('T')[0]
      }));
    } catch (error) {
      console.log('Error occurred: ', error);
    }
  }, [id]);

  useEffect(() => {
    loadAJob();
  }, [loadAJob]);  
  
  return (
    <div style={{backgroundColor: 'whitesmoke'}}>
       <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
          <form onSubmit={submitHandler}>
            <h2 className='text-center m-4'>Update Job</h2>
            <div className='mb-3'>
              <label htmlFor='companyName' className='form-label'>
                Company Name
              </label>
              <input type='text'
                     id='companyName' 
                     className='form-control opacity-75' 
                     name='companyName' 
                     value={job.companyName}
                     placeholder='Enter company Name'
                     onChange={changeHandler}
                     required 
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='role' className='form-label'>
                Role
              </label>
              <input type='text'
                     id='role' 
                     className='form-control opacity-75' 
                     name='role' 
                     value={job.role}
                     placeholder='Enter role of a job'
                     onChange={changeHandler}
                     required 
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='requirements' className='form-label'>
                Requirements
              </label>
              <input type='text' 
                     id='requirements'
                     className='form-control opacity-75' 
                     name='requirements' 
                     value={job.requirements}
                     placeholder='Enter Requirements'
                     onChange={changeHandler}
                     required 
              />
            </div> 
            <div className="mb-3">
                    <label htmlFor="expireDate">
                      Expire Date
                    </label>
                    <input
                      type="date"
                      id="expireDate"
                      className='form-control opacity-75'
                      name="expireDate"
                      value={job.expireDate}
                      onChange={changeHandler}
                      required
                    />
            </div>     
            <div className='mb-3'>
              <label htmlFor='location' className='form-label'>
                Location
              </label>
              <input type='text' 
                     id='location'
                     className='form-control opacity-75' 
                     name='location' 
                     value={job.location}
                     placeholder='Enter location'
                     onChange={changeHandler}
                     required 
              />
            </div>
              <div className='mb-3'>
                <label htmlFor='salary' className='form-label'>
                  Salary
                </label>
                <input type="number" 
                      id="salary" 
                      className='form-control'
                      name="salary" 
                      value={job.salary}
                      onChange={changeHandler}
                      onKeyDown={(event) => {
                        if (event.key === "-") {
                          event.preventDefault();
                        }
                      }}
                      min={0}
                      required
                      
                      ></input>
              </div>
              <div className='mb-3'>
                <label htmlFor='description' className='form-label'>
                  Description
                </label>
                <textarea id="description" 
                          className='form-control opacity-75'
                          name="description" 
                          value={job.description}
                          placeholder='Enter job description'
                          rows="4" 
                          cols="50"
                          onChange={changeHandler}
                          required></textarea>
              </div>
              <div className='d-flex justify-content-center'>
                  <button type='submit' className='btn btn-outline-primary'>
                    Submit
                  </button>
                  <Link to={'/'}>
                    <button type='button' className='btn btn-outline-danger mx-2'>
                      Cancel
                    </button>
                  </Link>
              </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditJob