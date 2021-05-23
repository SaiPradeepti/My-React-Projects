import React from 'react'

const App = () => {
  return (
    <div className="container">
        <h1>register with us</h1>
        <form id="form" className="form">
            <div className="form-control">
              <label htmlFor="username">username</label>
              <input type="text" id="username" placeholder="Enter your name" />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Enter Email id" />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" placeholder="Enter password" />
              <small>Error message</small>
            </div>
            <div className="form-control">
              <label htmlFor="password2">Confirm Password</label>
              <input type="text" id="password2" placeholder="Enter password again" />
              <small>Error message</small>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
