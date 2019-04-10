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
          <h1 className="social-media">Connect with us: @ 
            <i className="fab fa-twitter"></i><i className="fab fa-instagram"></i><i className="fab fa-facebook"></i></h1>
        </footer>
      </div>
    )
  }
}

export default Footer
