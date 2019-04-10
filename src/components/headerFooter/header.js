import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
    }

  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Log In</Link>
          </nav>
        </header>
      </div>
    )
  }
}

export default withRouter(Header)
