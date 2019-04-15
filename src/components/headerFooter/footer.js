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
          <h1 className="social-media">Connect with us: @
            <i className="fab fa-twitter"></i><i className="fab fa-instagram"></i><i className="fab fa-facebook"></i></h1>
        </footer>
      </div>
    )
  }
}

export default Footer
