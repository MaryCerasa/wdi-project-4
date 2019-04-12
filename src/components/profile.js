import React from 'react'
import Search from '../components/search'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import axios from 'axios'
import { withRouter } from 'react-router-dom'


// import Auth from '../lib/auth'

// const apikey = process.env.REACT_APP_FILE_STACK_API
//
// import * as filestack from 'filestack-js'
// const client = filestack.init(apikey)

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

  // addUserImage() {
  //   const options = {
  //     accept: ['image/*'],
  //     onFileUploadFinished: file => {
  //       this.setState({...this.state, image: file.url}, () => this.pushImageToBackEnd(this.state))
  //     }
  //   }
  //   client.picker(options).open()
  // }

  // pushAvatarToBackEnd (avatarLink) {
  //   axios.post('api/users', avatarLink, { headers: { Authorization: `Bearer ${Auth.getToken()}`} } )
  //     .then((res) => this.setState(res.data))
  //     .then(console.log(this.state))
  // }

  render() {
    return (
      <div className="wrapper">
        <main>
          <div className="leftSide">
            <div className="aboutMe">
              <h1>About Me</h1>
              <img className="avatar" src={this.state.image} />
              <h4 className="userName"> </h4>
              <button
                onClick={this.handleClick}>
                Upload image
              </button>
              <div className="profilePhoto">Photo
              </div>
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

export default withRouter(Profile)
