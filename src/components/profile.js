import React from 'react'
import Search from '../components/search'
import Auth from './lib/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { withRouter } from 'react-router-dom'

const apikey = 'Arty0sPVQwOloa7ilF8fSz'

import * as filestack from 'filestack-js'
const client = filestack.init(apikey)

class Profile extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {about_me: ''},
      error: ''
    }
    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlogSubmit = this.handleBlogSubmit.bind(this)
  }

  handleImageUpload(){
    this.addUserImage()
  }

  myBlogs() {
    console.log('getting the blog posts')
    axios.get('/api/user-blogs',
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.setState({blogs: res.data })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  componentDidMount() {
    this.myBlogs()
    this.getProfile()
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  getProfile() {
    axios.get('/api/wellnest/profile',
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.setState({profile: res.data})
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/wellnest/profile',
      {about_me: this.state.data.about_me},
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        this.setState({profile: res.data})
      })
      .then(console.log(this.state))
  }

  handleBlogSubmit(e){
    e.preventDefault()
    axios.post('/api/wellnest/blog',
      {text: this.state.data.blogText, title: this.state.data.blogTitle},
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.myBlogs()
      })
      .then(console.log(this.state))
  }

  addUserImage() {
    const options = {
      accept: ['image/*'],
      onFileUploadFinished: file => {
        this.setState({...this.state, image: file.url}, () => {
          axios.post('/api/wellnest/profile/image',
            {image_url: file.url},
            {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
            .then((res) => {
              this.setState({profile: res.data})
            })
            .then(console.log(this.state))
        })
      }
    }
    client.picker(options).open()
  }

  render() {
    return (
      <div className="wrapper">
        <main>
          <div className="leftSide">
            <div className="aboutMe">
              <h1>About Me</h1>
              <h4 className="userName"> </h4>
              <button
                onClick={this.handleImageUpload}>
                Upload image
              </button>
              <div className="profilePhoto">
                {this.state.profile &&
                  <img src={this.state.profile.image_url} />
                }
              </div>

              {this.state.profile &&
                <div>
                  {this.state.profile.content}
                </div>
              }
              <div className="textarea-aboutme">
                <form onSubmit={this.handleSubmit}>
                  <textarea
                    name="about_me"
                    onChange={this.handleChange}
                    placeholder="Type here..."
                  />
                  <button>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>


          <div className="myBlogPosts">
            <h1>My Blog Posts</h1>
            <div className="textarea-blogs">
              <form onSubmit={this.handleBlogSubmit}>
                Title:
                <input type="text"
                  name="blogTitle"
                  onChange={this.handleChange} />

                Blog:
                <textarea
                  name="blogText"
                  onChange={this.handleChange}
                  placeholder="Type here..."
                />
                <button>
                  Submit
                </button>
              </form>
            </div>
            <ul>
              {this.state.blogs && this.state.blogs.map((item) =>
                <li key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
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
