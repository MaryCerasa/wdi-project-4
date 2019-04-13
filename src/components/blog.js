import React from 'react'
import axios from 'axios'
import Auth from './lib/auth'

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blog: this.props.location.state.blog,
      comment: ''
    }

    this.handleSubmitComment = this.handleSubmitComment.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmitComment(e) {
    e.preventDefault()
    axios.post('/api/wellnest/' + this.state.blog.id + '/comments',
      {content: this.state.comment},
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.getBlog()
      })

  }

  handleChange({ target: { value }}) {
    this.setState({...this.state, comment: value })
  }

  getBlog() {
    axios.get('/api/wellnest/' + this.state.blog.id,
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        console.log(res.data)
        this.setState({blog: res.data })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  componentDidMount() {
    this.getBlog()
  }

  render() {
    return(
      <div className="blogs">
        <main>
          <div className="myBlogPosts">
            {this.state.blog.title}
            {this.state.blog.text}
            Comments:
            <br/>
            {this.state.blog.comments &&
              this.state.blog.comments.map((comment) =>
                <li key={comment.id}>
                  <p>{comment.creator && comment.creator.username}: {comment.content}</p>
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
