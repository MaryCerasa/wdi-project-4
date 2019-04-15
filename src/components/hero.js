import React from 'react'
import Nav from './lib/nav'
import Header from './headerFooter/header'

class Hero extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div className="heroPage">
          <img src="./assets/bluebirdsky.jpg"/>
          <p className="heroTitle">Welcome to WellNest.</p>
        </div>
      </div>
    )
  }
}

export default Hero
