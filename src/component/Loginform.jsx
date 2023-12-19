import React from 'react'
import './Loginform.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Loginform() {

  return (
    <div className=' wrapper d-flex align-items-center justify-content-center w-100'>
    <div className='login-box bg-light'>
    <h2 className='mb-3 text-center'>Login </h2>
    <form>
      <div className='form-group mb-2'>
       <label htmlfor='email' className='form-label'>Email address</label>
       <input type="email" className='form-control'></input>
       </div>
      <div className='form-group mb-2'>
       <label htmlfor='password'  className='form-label'>Password</label>
       <input type="password" className='form-control'></input>
        </div>
       <button  type='submit ' className='btn btn-danger mt-3 mx-auto' size='lg'>Sign In</button>
    </form>
    </div>
    </div>
  )
}
