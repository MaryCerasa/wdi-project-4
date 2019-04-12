import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return(
      <div className="navbar">
        <div className="links">
          <div className="navbarHome">
            <Link to="/">Home</Link>
          </div>
          <div className="navbarAbout">
            <Link to="/about">About</Link>
          </div>
          <div className="navbarProfile">
            <Link to="/profile">My Profile</Link>
          </div>
          <div className="navbarLogin">
            <Link to="/login">Login</Link>
          </div>
          <div className="navbarLogin">
            <Link to="/register">Register</Link>
          </div>
          <div className="logout">
            <Link to="/" className="navbarLogout" onClick={this.handleSubmit}>Logout</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
