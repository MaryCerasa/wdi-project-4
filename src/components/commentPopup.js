import React from 'react'
import Auth from './lib/auth'
import { Link, withRouter, Redirect } from 'react-router-dom'

import axios from 'axios'

class CommentPopup extends React.Component {
  constructor() {
    super()

    this.state = {
      ratings: [],
      redirect: false
    }

    this.handleSubmitComment = this.handleSubmitComment.bind(this)
  }

  handleSubmitComment(e) {
    e.preventDefault()
    axios.post('/wellnest/' + this.props.blogId + '/comments',
      {headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.props.onClose()
      })
  }


  render() {
    if(!this.props.show) {
      return null
    }
    {this.props.search && console.log(this.props.search )}
    {this.state.search && console.log(this.state.search )}
    return (

      <div className="popup-backdrop">
        <main>
          <div className="popup">
            <form onSubmit={this.handleSubmitComment}>
              <textarea
                name="myblogs"
                placeholder="Type here..."
              />
              <button>Submit</button>
              

            </form>
          </div>
        </main>
      </div>

    )
  }
}

export default withRouter(CommentPopup)
