import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
      })
      .then(() => this.props.history.push('/login'))
      .catch(err => {
        console.log(err)
        console.log(err.message)
      })
  }

  render() {
    return (
      <main>
        <form className="formWrapper" onSubmit={this.handleSubmit}>
          <div className="registerForm">
            <h2>Welcome to WellNest!</h2>
            <h3>To sign up, please fill in the details below.</h3>
            <div className="username">Username
            </div>
            <input
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <div className="email">Email
            </div>
            <input
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <div className="password">Password
            </div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <div className="password-confirmation">Confirm Password
            </div>
            <input
              name="password_confirmation"
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <div className="submitButton">
              <button className="registerButtonClick">Submit</button>
            </div>
            <p> Already signed up? Click <Link className="loginLink" to='/login'>here</Link> to login! </p>
          </div>

        </form>
      </main>
    )
  }

}

export default Register
