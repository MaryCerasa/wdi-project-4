import React from 'react'
import Search from '../components/search'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Profile extends React.Component {
  constructor() {
    super()

    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('test')
  }

  myBlogs() {
    console.log('getting the blogposts')
    axios.get('/api/wellnest')
      .then(res => {
        this.setState({blogs: res.data })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  componentDidMount() {
    this.myBlogs()
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
            <ul>
              {this.state.blogs && this.state.blogs.map((item) =>
                <li key={item.id}>
                  <Link to={`/myblogs/${item.id}`}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </Link>
                </li>
              )}
            </ul>
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
