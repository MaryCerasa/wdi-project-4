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
        <main>
          <div className="heroPage">
            <img src="./assets/bluebirdsky.jpg"/>
          </div>
        </main>
      </div>

    )
  }
}

export default Hero
