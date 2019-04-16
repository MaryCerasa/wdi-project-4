import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../lib/auth'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = {data: {}}

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
            <Link className="navbarHomeLink" to="/home">Home</Link>
          </div>
          <div className="navbarAbout">
            <Link className="navbarAboutLink" to="/about">About</Link>
          </div>
          {Auth.isAuthenticated() &&
            <div className="navbarProfile">
              <Link className="navbarProfileLink" to="/profile">My Profile</Link>
            </div>
          }

          {!Auth.isAuthenticated() &&
            <div className="navbarLogin">
              <Link className="navbarLoginLink" to="/login">Login</Link>
            </div>
          }
          {!Auth.isAuthenticated() &&
            <div className="navbarLogin">
              <Link className="navbarRegisterLink" to="/register">Register</Link>
            </div>
          }
          <div className="navbarLogin">
            <Link className="navbarContactLink" to="/contact">Contact</Link>
          </div>

          {Auth.isAuthenticated() &&
            <div className="logout">
              <Link to="/" className="navbarLogout" onClick={this.logout}>Logout</Link>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Nav
