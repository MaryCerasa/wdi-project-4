import React from 'react'


class Footer extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div>
        <footer>
          <h1 className="captions">© WellNest 2019</h1>
          <h1 className="nhs-logo"><span>Developed via the</span>
            <a target='_blank' href='https://developer.api.nhs.uk/'><img src={'./assets/nhs-logo.png'} alt="nhs-logo"/></a><span>API</span></h1>
          <h1 className="social-media">Connect with us:
            <a target='_blank' href='https://twitter.com/TheWellNestUK'>
              &nbsp; <i className="fab fa-twitter"></i> </a>
            <a target='_blank' href='http://www.instagram.com'>
              &nbsp; <i className="fab fa-instagram"></i>
            </a>
            <a target='_blank' href='https://www.facebook.com'>
            &nbsp; <i className="fab fa-facebook"></i></a></h1>
        </footer>
      </div>
    )
  }
}

export default Footer
