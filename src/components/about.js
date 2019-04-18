import React from 'react'
import Nav from './lib/nav'
import Header from './headerFooter/header'

class About extends React.Component {
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
          <div className="aboutPage">
            <br/>
            <p><strong>Wellnest</strong> is a platform created to provide a safe space for fostering mental health awareness and understanding of depression and other disorders.</p>
            <br/>
            <p>Our goal is to help you find your wings by initiating and maintaining a positive dialogue among peer support networks. This effort hopes to encourage communication surrounding mental health and wellness in order to break the stigma.</p>
            <br/>
            <p>Guests can stay up to date with relevant news provided by the NHS or write posts about their experiences and receive positive encouragement and support from their peers.  If you prefer, seek advice from practicing therapists and mental health professionals through our verified accounts instead.</p>
            
            <img className="aboutPic" src="./assets/mh-logo.png"/>
          </div>
        </main>
      </div>
    )
  }
}

export default About
