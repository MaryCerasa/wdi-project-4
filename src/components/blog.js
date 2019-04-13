import React from 'react'
import axios from 'axios'
import Auth from './lib/auth'

class Blog extends React.Component {
  constructor() {
    super()

    this.state = {
      comment: {}
    }

    this.handleSubmitComment = this.handleSubmitComment.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmitComment(e) {
    e.preventDefault()
    axios.post('/api/wellnest/profile',
      this.state.comment,
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        this.setState({profile: res.data})
      })
      .then(console.log(this.state))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.comment, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  render() {
    return(
      <div className="blogs">
        <main>
          <div className="myBlogPosts">
            {this.props.location.state.blog.title}
            {this.props.location.state.blog.text}
            Comments:
            <br/>
            {this.props.location.state.blog.comments &&
              this.props.location.state.blog.comments.map((comment) =>
                <li key={comment.id}>
                  <p>{comment.content}</p>
                </li>
              )}
            <form onSubmit={this.handleSubmitComment}>
              <textarea
                onChange={this.handleChange}
                name='content'
                placeholder="Type here..."
              />
              <button>Submit</button>
            </form>
          </div>
          {this.props.location.state.text}
        </main>
      </div>
    )
  }
}

export default Blog
