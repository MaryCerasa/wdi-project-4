import React from 'react'
import Auth from './lib/auth'
import Nav from './lib/nav'
import Header from './headerFooter/header'


import axios from 'axios'

class EditBlog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blog: {
        text: '',
        title: ''
      }
    }

    // Put the blog from the props into this components state, if it exists.
    if (this.props.location.state && this.props.location.state.blog) {
      this.state.blog = this.props.location.state.blog
    }

    this.handleBlogSubmit = this.handleBlogSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleBlogSubmit(e){
    e.preventDefault()
    if(this.state.blog.id) {
      axios.put('/api/wellnest/blog/' + this.state.blog.id,
        this.state.blog,
        {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(() => {
          this.props.history.push('/profile')
        })
        .then(console.log(this.state))
    } else {
      axios.post('/api/wellnest/blog',
        this.state.blog,
        {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
        .then(() => {
          this.props.history.push('/profile')
        })
        .then(console.log(this.state))
    }
  }

  handleTitleChange(e) {
    const b = this.state.blog
    b.title = e.target.value
    this.setState({
      blog: b
    })
  }

  handleTextChange(e) {
    const b = this.state.blog
    b.text = e.target.value
    this.setState({
      blog: b
    })
  }

  render() {
    return(
      <div>
        <Header />
        <Nav />
        <div className="editBlog">
          <main>
            { this.state.blog &&
              this.state.blog.id &&
              <h1>Edit your blog</h1>
            }

            { !this.state.blog.id &&
              <h1>Create your blog</h1>
            }

            <div className="textarea-blogs">
              <form onSubmit={this.handleBlogSubmit}>
                Title:
                {this.state.blog &&
                  <input type="text"
                    name="blogTitle"
                    defaultValue={this.state.blog.title}
                    onChange={this.handleTitleChange} />}

                {!this.state.blog &&
                    <input type="text"
                      name="blogTitle"
                      onChange={this.handleTitleChange} />}

                Blog:
                {this.state.blog &&
                  <textarea
                    name="blogText"
                    defaultValue={this.state.blog.text}
                    onChange={this.handleTextChange}
                    placeholder="Type here..."
                  />
                }

                {!this.state.blog &&
                  <textarea
                    name="blogText"
                    onChange={this.handleTextChange}
                    placeholder="Type here..."
                  />
                }
                <button>
                  Submit
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default EditBlog
