import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewJob = () => {
  const [job, setJob] = useState({
    companyName: '',
    role: '',
    requirements: '',
    description: '',
    location: '',
    salary: '',
    postedDate: '',
    expireDate: ''
  })

  const { id } = useParams()

  const loadAJobById = useCallback(async () => {
    const result = await axios.get(`http://localhost:8081/job/${id}`);
    setJob(result.data);
  }, [id]);

  useEffect(() => {
    loadAJobById();
  }, [loadAJobById]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>View Job</h2>
          <div className='card'>
            <div className='card-header'>
              <p className='text-center mb-3 h5'><b>Details of job by id :</b> {job.jobid}</p>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <i><b className='opacity-75'>CompanyName : </b></i>
                  {job.companyName}
                </li>
                <li className='list-group-item'>
                  <i><b className='opacity-75'>Role : </b></i>
                  {job.role}
                </li>
                <li className='list-group-item'>
                  <i><b className='opacity-75'>Salary : </b></i>
                  {job.salary}
                </li>
                <li className='list-group-item'>
                  <i><b className='opacity-75'>postedDate : </b></i>
                  {job.postedDate}
                </li>
                <li className='list-group-item'>
                  <i><b className='opacity-75'>expireDate : </b></i>
                  {job.expireDate}
                </li>
                <li className='list-group-item'>
                  <i><b className='opacity-75'>Requirements : </b></i>
                  {job.requirements}
                </li>
                <li className='list-group-item'>
                  <b className='opacity-75'><i>Description : </i></b>
                  {job.description}
                </li>
              </ul>
            </div>
          </div>
          <Link className='btn btn-primary my-2' to={"/"}>Back to Jobs</Link>
        </div>
      </div>
    </div>
  )
}

export default ViewJob;
