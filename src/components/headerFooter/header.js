import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
    }

    this.handleChange = this.handleChange.bind(this)

  }
  handleChange({ target: { value } }) {
    this.setState({...this.state, query: value })
  }

  render() {
    return (

      <div className = "headerWrapper">
        <header>
          <select className="dropdown">
            <option default value="home">Home</option>
            <option value="login" onChange={this.handleChange}>Log In</option>
            <option value="register">Register</option>
            <option value="profile">Profile</option>
          </select>
          <div className="contains-title">
            <h1>WellNest</h1>
          </div>
          <div className="contains-logo">
            <Link to='/'><img src={'./assets/mh-logo.png'} alt="MentalHealth-logo"/></Link>
          </div>
        </header>
      </div>
    )
  }
}

export default withRouter(Header)
