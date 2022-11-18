import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {Link} from 'react-router-dom';
const Nav=()=>{
    return(
        <>
          <nav className="navbar navbar-expand-md navbar-dark bg-info" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'><i class="bi bi-code"></i> ProgrammerHub</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse navcom" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-3 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to='/'><i class="bi bi-house"></i> Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/aboutus'><i class="bi bi-file-person"></i> About Us</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to='/contactus'><i class="bi bi-person-lines-fill"></i>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/services'><i class="bi bi-handbag"></i> Services</Link>
          </li>
        </ul>
        <div className="nav-item">
            <Link className="nav-link text-white float-end" to='/login'><i class="bi bi-box-arrow-in-right"></i> Login</Link>
          </div>
      </div>
    </div>
  </nav>

        </>
    )
}
export default Nav;