import React from 'react'
import Nav from './lib/nav'
import Header from './headerFooter/header'

class Contact extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <br/>
        <main>
          <div className="contacts">
            <div className="contactPage">
              <p>We would love to from you – whether it be a general  question or if you are interested to work together on a sponsorship or partnership. Please reach out on XX- XX- XXX.</p>
              <br/>
              <p>Otherwise, please email us. Our support team will respond within 48 working hours (does not include weekends).</p>
              <br/>
              <p>Or you can email us at: WellNestUk@email.com</p>
              <br/>
              <p>Follow us on social media: Twitter, Facebook, Instagram.</p>
            </div>
            <br/>
            <img className="aboutPic" src="./assets/mh-logo.png"/>
          </div>
        </main>
      </div>
    )
  }
}

export default Contact
