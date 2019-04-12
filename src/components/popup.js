import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import axios from 'axios'

class Popup extends React.Component {
  constructor() {
    super()

    this.state = {
      comments: 'test',
      ratings: [],
      redirect: false
    }
  }

  handleClick(item) {
    axios.post('api/search', { searchId: item.id, name: item.name })
      .then((res)=> this.setState({...this.state, specificSearch: res.data, search: item }, () => this.setState({...this.state, redirect: !this.state.redirect}, () => console.log(this.state.search))))
      .catch((err) => console.log(err))
  }


  render() {
    if(!this.props.show) {
      return null
    }
    {this.props.search && console.log(this.props.search )}
    {this.state.search && console.log(this.state.search )}
    return (
      <div className="popup-backdrop">
        <div className="popup">
          <ul>
            {this.props.search.map((item) =>
              <li key={item.id} onClick={() => this.handleClick(item)}>
                {this.state.redirect && <Redirect
                  to={{
                    pathname: '/search',
                    state: {
                      search: this.state.search,
                      specificSearch: this.state.specificSearch
                    }
                  }}></Redirect>}{item.name}
              </li>
            )}
          </ul>
          <button className="popup-close" onClick={this.props.onClose}>Cancel</button>
        </div>
      </div>

    )
  }
}

export default withRouter(Popup)
