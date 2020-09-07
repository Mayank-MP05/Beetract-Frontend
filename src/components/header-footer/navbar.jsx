import React from "react";
import { Link } from "react-router-dom";
import { mainLogo } from "../../assets/images";

import "./navbar.style.css";
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='#'>
        <img src={mainLogo} alt='Beetract Logo' className='main-logo' />
        Beetract
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item dropdown'>
            <Link
              className='nav-link dropdown-toggle'
              to='/solutions'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              Solutions
            </Link>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <Link className='dropdown-item' to='#'>
                Startups
              </Link>
              <Link className='dropdown-item' to='#'>
                Incubation
              </Link>
              <div className='dropdown-divider'></div>
              <Link className='dropdown-item' to='#'>
                Freelancer
              </Link>
              <Link className='dropdown-item' to='#'>
                Prelancer
              </Link>
              <div className='dropdown-divider'></div>
              <Link className='dropdown-item' to='#'>
                Job hub
              </Link>
            </div>
          </li>
          <li className='nav-item active'>
            <Link className='nav-link' to='/about-us'>
              About us <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/get-support'>
              Get Support
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/signup'>
              Sign Up
            </Link>
          </li>
        </ul>
        <div className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'>
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
