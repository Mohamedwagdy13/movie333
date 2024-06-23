import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className='navbar m-auto p-1 ms-1'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <Link className="navbar-brand text-danger" to="/">Movie App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="ms-5 collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className='header' to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className='header' to="/allmovie">All Movies</Link> 
            </li>
            <li className="nav-item">
              <Link className='header' to="/search">Search</Link>
            </li>
          </ul>
        </div>
        <div className='user'>
        <Link to="/signup" className="btn btn-outline-danger ms-2">Sign Up</Link>
        <Link to="/login" className="btn btn-danger ms-2">Log In</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
