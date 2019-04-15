import React from 'react'
import Search from '../components/search'
import Auth from './lib/auth'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './lib/nav'
import Header from './headerFooter/header'

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
    this.handleDeleteBlog = this.handleDeleteBlog.bind(this)
  }

  handleImageUpload(){
    this.addUserImage()
  }

  handleDeleteBlog(blogId) {
    axios.delete('/api/wellnest/blog/' + blogId,
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.myBlogs()
      })
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

  addUserImage() {
    const options = {
      accept: ['image/*'],
      onFileUploadFinished: file => {
        this.setState({...this.state, image: file.url}, () => {
          axios.post('/api/wellnest/profile/image',
            {image_url: file.url},
            {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
            .then((res) => {
              console.log('test')
              console.log(res.data)
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
      <div>
        <Header />
        <Nav />
        <div className="wrapperProfile">
          <main>
            <div className="leftSide">
              <div className="aboutMe">
                <h1>About Me</h1>
                {this.state.profile &&
                  <h4 className="userName">{this.state.profile.creator.username}</h4>
                }
                <div className="profileImage">
                  {this.state.profile &&
                    <img src={this.state.profile.image_url}
                      className="img"/>
                  }
                </div>

                <button className="imageUpload"
                  onClick={this.handleImageUpload}>
                  Upload Image
                </button>

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
                    <button className="button-aboutme">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>


            <div className="myBlogPosts">
              <h1>My Blog Posts</h1>
              <ul>
                <Link to={{
                  pathname: '/editBlog'
                }}>
                  <button className="create-myblog">Create a blog</button>
                </Link>
                {this.state.blogs && this.state.blogs.map((item) =>
                  <li key={item.id}>
                    <Link to={{
                      pathname: '/blog',
                      state: {
                        blog: item
                      }
                    }}>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </Link>

                    <Link to={{
                      pathname: '/editBlog',
                      state: {
                        blog: item
                      }
                    }}>
                      <button className="edit-myblog">Edit</button>
                    </Link>
                    <button className="delete-myblog" onClick={()=>{
                      this.handleDeleteBlog(item.id)
                    }}>Delete</button>
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
      </div>
    )
  }

}

export default withRouter(Profile)
