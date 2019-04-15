import React from 'react'
import Blog from '../components/blog'
import Auth from './lib/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Nav from './lib/nav'
import Header from './headerFooter/header'


// import Auth from '../lib/auth'

// const apikey = process.env.REACT_APP_FILE_STACK_API
//
// import * as filestack from 'filestack-js'
// const client = filestack.init(apikey)

class ViewProfile extends React.Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
      data: {},
      error: ''
    }

    this.handleSubmitComment = this.handleSubmitComment.bind(this)
  }

  componentDidMount() {
    this.getBlogs()
    this.getProfile()
  }

  getProfile() {
    console.log(this.props)
    axios.get('/api/wellnest/profile/'+this.props.location.state.userId,
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.setState({profile: res.data})
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  getBlogs() {
    axios.get('/api/user-blogs/'+this.props.location.state.userId,
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.setState({blogs: res.data })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  handleSubmitComment(e) {
    e.preventDefault()
  }


  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div className="viewProfile">
          <main>
            <div className="leftSide">
              <div className="aboutMe">
                <h1>About Me</h1>
                <img className="avatar" src={this.state.image} />
                <h4 className="userName"> </h4>

                <div className="profileImage">
                  {this.state.profile &&
                    <img src={this.state.profile.image_url}
                      className="img"/>
                  }
                </div>

                {this.state.profile &&
                  <div>
                    {this.state.profile.content}
                  </div>
                }

              </div>
            </div>
            <div className="myBlogPosts">
              <h1>My Blog Posts</h1>
              <ul>
                {this.state.blogs && this.state.blogs.map((item) =>
                  <ul key={item.id}>
                    <Link to={{
                      pathname: '/blog',
                      state: {
                        blog: item
                      }
                    }}>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </Link>
                    --------------------------------------------------
                  </ul>
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
      </div>
    )
  }
}

export default withRouter(ViewProfile)
