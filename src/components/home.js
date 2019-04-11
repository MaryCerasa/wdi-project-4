import React from 'react'
import Search from '../components/search'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return(
      <div className="wrapper">
        <main>
          <div className="leftSide">
            <div className="searchBar">
              <Search />
            </div>
            <div className="news">
              <h1>News</h1>
            </div>
          </div>
          <div className="latestBlogs">
            <h1>Latest Blogs</h1>
          </div>
          <div className="rightSide">
            <div className="mapsOffices">
              <h1>Maps</h1>
            </div>
            <div className="tweets">
              <h1>Tweets</h1>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
