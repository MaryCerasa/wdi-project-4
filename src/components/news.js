import React from 'react'

class News extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return(
      <div className="news">
        <main>
          <div className = "title">
            <h2>Title</h2>
          </div>
          {this.props.location.state.articleURL}
        </main>
      </div>
    )
  }
}

export default News
