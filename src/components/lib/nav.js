import React from 'react'
import { Link} from 'react-router-dom'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return(
      <div className="navBarLinks">
        <div className="navbarAbout">
          <Link to="/home">About</Link>
        </div>
        <div className="navbarProfile">
          <Link to="/profile">My Profile</Link>
        </div>
        <div className="navbarNews">
          <Link to="/news">News</Link>
        </div>
        <div className="navbarLogin">
          <Link to="/login">Login/Register</Link>
        </div>
        <Link to="/" className="navbarLogout" onClick={this.handleSubmit}>Logout</Link>
      </div>
    )
  }
}

export default Nav
