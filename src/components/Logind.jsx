import React from 'react'

const Logind = () => {
  return (
    <div>
      <div className="container1" id="login-form">
        <h1>Login!</h1>
        <div className="input-container">
            <input type="text" placeholder="Username" />
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
        <a href="homepage.html"><button className="btn btn-login">Login</button></a>
        <br></br><br></br>
        <p>Don't have an account? <span className="toggle-link" id="show-signup">Sign up</span></p>
        </div>
    </div>
  )
}

export default Logind
