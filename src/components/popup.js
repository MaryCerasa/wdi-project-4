import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'

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
            {this.props.search.results.map((item) =>
              <li key={item.id}>
                <a target="_blank" rel="noopener noreferrer" href={item.url} >
                  {item.title}
                </a>
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
