import React from 'react'
import "./style.css"

function login() {
  return (
    <div className='login'>
        <h2>Log in</h2>
        <form action="">
            <fieldset>
                <label>Email</label>
                <input type="email" placeholder='Enter Your Email' required />
                <label>Password</label> 
                <input type="password" placeholder='Enter your password' required />
                <button type='submit'>Log in</button>
            </fieldset>
        </form>
    </div>
  )
}

export default login