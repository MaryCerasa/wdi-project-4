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
          <div className="photo">photo
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
