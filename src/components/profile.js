import React from 'react'
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
    // this.handleChange = this.handleChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClickButton = this.handleClickButton.bind(this)
    // this.closePopup = this.closePopup.bind(this)
    // this.handleClickButton = this.handleClickButton.bind(this)
    // this.handleClickGames = this.handleClickGames.bind(this)
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
