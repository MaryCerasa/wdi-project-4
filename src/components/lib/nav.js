import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../lib/auth'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.logout = this.logout.bind(this)

  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
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
          <div className="navbarLogin">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="logout">
            <Link to="/" className="navbarLogout" onClick={this.logout}>Logout</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
