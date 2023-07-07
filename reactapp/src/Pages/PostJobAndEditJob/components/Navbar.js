import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar1'>
        <div className='navWrapper'>
        <h1>Job Portal</h1>
            <ul className='navItems'>
                <Link to={'/'} className='navItem'>
                <li>Jobs</li>
                </Link>
                <Link to={'/addjob'} className='navItem'>
                <li>Add Job</li>
                </Link>
                <li className='navItem'>Back To Home</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar