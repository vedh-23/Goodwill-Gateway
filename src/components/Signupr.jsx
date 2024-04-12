import React from 'react'

const Signupr = () => {
  return (
    <div>
      <div className="container1" id="signup-form">
        <h1>Sign Up!</h1>
        <div className="input-container">
            <input type="text" placeholder="Userame" />
        </div>
        <div className="input-container">
            <input type="text" placeholder="Registration ID" />
        </div>
        <div className="input-container">
            <input type="password" placeholder="Password" />
        </div>
        <div className="input-container">
            <input type="text" placeholder="Address" />
        </div>
        <div className="input-container">
            <input type="text" placeholder="Contact" />
        </div>
        
        <button className="btn btn-signup">Sign Up</button>
        <br></br><br></br>
        <p>Already have an account? <span className="toggle-link" id="show-login">Login</span></p>
    </div>
    </div>
  )
}

export default Signupr
