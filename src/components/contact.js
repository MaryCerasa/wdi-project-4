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
      
        <main>
          <div className="contacts">
            <div className="contactPage">
              <p>We would love to from you – whether it be a general  question or if you are interested to work together on a sponsorship or partnership.</p>
              <br/>
              <p>Please reach out on XX- XX- XXX. Otherwise, please email us. Our support team will respond within 48 working hours (does not include weekends).</p>
              <br/>
              <p>Shoot us an email: Wellnestuk@email.com</p>
              <br/>
              <p>Follow us on social media: <a className="twitterContact" target='_blank' href='https://twitter.com/TheWellNestUK'>Twitter</a>, <a className="fbContact" target='_blank' href='https://www.facebook.com'>Facebook</a>, <a className="instaContact" target='_blank' href='http://www.instagram.com'>Instagram</a></p>
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
