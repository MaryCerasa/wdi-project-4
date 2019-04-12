import React from 'react'

class Blogs extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return(
      <div className="blogs">
        <main>
          <div className = "title">
            <h2>Title</h2>
          </div>
          {this.props.location.state.text}
        </main>
      </div>
    )
  }
}

export default Blogs
