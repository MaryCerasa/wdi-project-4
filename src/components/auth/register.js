import React from 'react'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <main>
        <div className="registerForm">
          <div className="username">Username
          </div>
          <div className="email">Email
          </div>
          <div className="password">Password
          </div>
          <div className="password-confirmation">Confirm Password
          </div>
        </div>
      </main>
    )
  }

}

export default Register
