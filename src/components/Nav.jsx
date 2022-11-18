import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom';
const Nav=()=>{
    return(
        <>
          <nav className="navbar navbar-expand-md navbar-dark bg-danger" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'><i class="bi bi-code"></i>ProgrammerHub</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/aboutus'>About Us</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to='/contactus'>Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/services'>Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/images'>Images</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

        </>
    )
}
export default Nav;