import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: { email: '', password: '' },
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/')
        console.log(res.data)
      })
      .catch(() => {
        this.setState({ error: 'Invalid Credentials, login Fail.'})
      })
  }

  render() {
    return (
      <main>
        <form className="formWrapper" onSubmit={this.handleSubmit}>
          <div className="loginForm">
            <h2>Welcome to WellNest!</h2>
            <h3>Please sign in below.</h3>
            <div className="email">Email
            </div>
            <input
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            >
            </input>
            <div className="password">Password
            </div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            >
            </input>
            <div className="logInButton">
              <button className="logInButtonClick"><strong>Submit</strong></button>
            </div>
            <br />
            <div className="invalidcredentials">
              {this.state.error && this.state.error}
            </div>
            <p> Not signed up? Click <Link className="registerLink" to='/register'>here</Link> to register! </p>
          </div>


        </form>
      </main>
    )
  }

}

export default Login
