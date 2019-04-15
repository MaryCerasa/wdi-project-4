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
          <h1 className="social-media">Connect with us:
            <a target='_blank' href='https://twitter.com/TheWellNestUK'>
              <i className="fab fa-twitter"></i> </a>
            <a target='_blank' href='http://www.instagram.com'>
              <i className="fab fa-instagram"></i>
            </a>
            <a target='_blank' href='https://www.facebook.com'>
              <i className="fab fa-facebook"></i></a></h1>
        </footer>
      </div>
    )
  }
}

export default Footer
