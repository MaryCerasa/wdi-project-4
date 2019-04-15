import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../lib/auth'
import axios from 'axios'

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

  getUser() {
    axios.get('/api/wellnest/profile/user', {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.setState({user: res.data })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }


  componentDidMount() {
    this.getUser()
  }

  render() {
    return (

      <div className = "headerWrapper">
        <header>
          <div className="welcomeback">
            <h4>Welcome back,
              {Auth.isAuthenticated() &&
            <Link to={{
              pathname: '/profile'
            }}>
              <span> {this.state.user && this.state.user.username}</span>
            </Link>
              }
            </h4>
          </div>
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
