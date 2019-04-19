import React from 'react'
import axios from 'axios'
import Auth from './lib/auth'
import Nav from './lib/nav'
import Header from './headerFooter/header'

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

  handleDeleteComment(commentId) {
    axios.delete('/api/wellnest/comments/' + commentId,
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.getBlog()
      })
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
        this.setState({blog: res.data })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  getUser() {
    axios.get('/api/wellnest/profile/user',
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(res => {
        this.setState({user: res.data })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  componentDidMount() {
    this.getBlog()
    this.getUser()
  }

  render() {
    return(
      <div>
        <Header />
        <Nav />
        <div className="blogs">
          <main>
            <div className="viewBlogPosts">
              <h1>{this.state.blog.title}</h1>
              <p>{this.state.blog.text}</p>
              <br/>

              {this.state.blog.comments &&
                this.state.blog.comments.map((comment) =>
                  <li key={comment.id}>
                    <p className="comments">{comment.creator && comment.creator.username}: {comment.content}</p>

                    {this.state.user &&
                      this.state.user.id === comment.creator.id &&
                      <div>
                        <button className="delete-comment" onClick={()=>{
                          this.handleDeleteComment(comment.id)
                        }}>Delete</button>
                      </div>
                    }

                  </li>

                )}
              <form onSubmit={this.handleSubmitComment}>
                <div className="comments-blog">
                  <h3>Comments</h3>

                  <textarea
                    onChange={this.handleChange}
                    name='content'
                    placeholder="Type here..."
                  />
                  <button className="submit-comment">Submit</button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Blog
