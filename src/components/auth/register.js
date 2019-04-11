import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
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
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <div className="registerForm">
            <h2>Welcome to WellNest!</h2>
            <h3>To sign up, please fill in the details below.</h3>
            <div className="username">Username
            </div>
            <input
              placeholder="Username"
              value={this.state.data.username}
              onChange={this.handleChange}
            >
            </input>
            <div className="email">Email
            </div>
            <input
              placeholder="Email"
              value={this.state.data.email}
              onChange={this.handleChange}
            >
            </input>
            <div className="password">Password
            </div>
            <input
              placeholder="Password"
              value={this.state.data.password}
              onChange={this.handleChange}
            >
            </input>
            <div className="password-confirmation">Confirm Password
            </div>
            <input
              placeholder="Confirm Password"
              value={this.state.data.passwordConfirmation}
              onChange={this.handleChange}
            >
            </input>
            <div className="submitButton">
              <button>Submit</button>
            </div>
            <div className="logInInstead">
              <button>Log In Instead</button>
            </div>
          </div>
        </form>
      </main>
    )
  }

}

export default Register
