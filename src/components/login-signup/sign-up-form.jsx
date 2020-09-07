import React from "react";
import "./login-signup.style.css";
import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <div id='signup'>
      <div className='myform form '>
        <div className='logo mb-3'>
          <div className='col-md-12 text-center'>
            <h1>Signup</h1>
          </div>
        </div>
        <form action='#' name='registration'>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              name='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className='form-control'
              aria-describedby='emailHelp'
              placeholder='Enter Password'
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Confirm Password</label>
            <input
              type='password'
              name='password'
              id='password'
              className='form-control'
              aria-describedby='emailHelp'
              placeholder='Enter Password again'
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Select your role</label>
            <select class='custom-select'>
              <option value='1'>Individual</option>
              <option value='2'>Business/Startup</option>
              <option value='3'>Incubator</option>
            </select>
          </div>

          <div className='col-md-12 text-center mb-3'>
            <button
              type='submit'
              className=' btn btn-block mybtn btn-primary tx-tfm'>
              Get Started For Free
            </button>
          </div>
          <div className='col-md-12 '>
            <div className='form-group'>
              <p className='text-center'>
                <Link to='/login'>Already have an account?</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
