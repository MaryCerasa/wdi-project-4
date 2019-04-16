import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'
import { Link } from 'react-router-dom'
import Nav from '../lib/nav'
import Header from '../headerFooter/header'

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
      <div>
        <Header />
        <Nav />
        <main>
          <form className="formWrapper" onSubmit={this.handleSubmit}>
            <div className="registerForm">
              <h2>Welcome to WellNest!</h2>
              <h3>To sign up, please fill in the details below.</h3>
              <div className="input">
                <div className="username"><i className="fas fa-user"></i> &nbsp; Username:
                </div>

                <input
                  className="usernameInput"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />

                <div className="email"><i className="fas fa-envelope"></i> &nbsp; Email:
                </div>
                <input
                  className="emailInput"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />

                <div className="password"><i className="fas fa-lock"></i> &nbsp; Password:
                </div>
                <input
                  className="passInput"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />

                <div className="password-confirmation"><i className="fas fa-lock"></i> &nbsp; Confirm Password:
                </div>
                <input
                  className="passconfirmInput"
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

            </div>
          </form>
        </main>
      </div>
    )
  }

}

export default Register
