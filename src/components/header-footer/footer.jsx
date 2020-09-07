import React from "react";
import "./footer.style.css";
import { Link } from "react-router-dom";
/*
Projects
Freelancers
Prelancers
Start-ups
Assistance
Incubation
Job Hub

*/

/**
 * 
 * About Us
Company Profile
Team
Get Support

 */
export default function Footer() {
  return (
    <section id='footer'>
      <div className='container'>
        <div className='row text-center text-xs-center text-sm-left text-md-left'>
          <div className='col-xs-12 col-sm-4 col-md-4'>
            <h5>Solutions</h5>
            <ul className='list-unstyled quick-links'>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Projects
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Freelancers
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Prelancers
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Assistance
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Incubation
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Job Hub
                </Link>
              </li>
            </ul>
          </div>
          {/* Second Column Start Here ...*/}
          <div className='col-xs-12 col-sm-4 col-md-4'>
            <h5>About Us</h5>
            <ul className='list-unstyled quick-links'>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Company Profile
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Team
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Get Support
                </Link>
              </li>
            </ul>
          </div>
          {/* Third Section Starts HEre ..  */}
          <div className='col-xs-12 col-sm-4 col-md-4'>
            <h5>Others</h5>
            <ul className='list-unstyled quick-links'>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>How it Works
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Privacy Policy
                </Link>
              </li>
              <li>
                <Link to=''>
                  <i className='fa fa-angle-double-right'></i>Terms of use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5'>
            <ul className='list-unstyled list-inline social text-center'>
              <li className='list-inline-item'>
                <Link to=''>
                  <i className='fa fa-facebook'></i>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to=''>
                  <i className='fa fa-twitter'></i>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to=''>
                  <i className='fa fa-instagram'></i>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to=''>
                  <i className='fa fa-google-plus'></i>
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link to='' target='_blank'>
                  <i className='fa fa-envelope'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='bottom-div col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white'>
            <p>
              <u>
                <Link to='/'>Beetract Pvt Ltd</Link>
              </u>
              &nbsp;is a Registered ISO of BeOfUse, Inc. India [a wholly owned
              subsidiary of BeOfUse Services Pvt Ltd]
            </p>
            <p className='h6'>
              © All right Reversed.
              <Link className='text-green ml-2' to='/' target='_blank'>
                BeOfUse Services
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
