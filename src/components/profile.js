import React from 'react'
import Search from '../components/search'

class Profile extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className="wrapper">
        <main>
          <div className="leftSide">
            <div className="searchBar">
              <Search />
            </div>
            <div className="aboutMe">
              <h1>About Me</h1>
            </div>
          </div>
          <div className="myBlogPosts">
            <h1>My Blog Posts</h1>
          </div>
          <div className="rightSide">
            <div className="faveBlogs">
              <h1>Favorite Blogs</h1>
            </div>
            <div className="mySocial">
              <h1>My Social Media</h1>
            </div>
          </div>
        </main>
      </div>
    )
  }

}

export default Profile
