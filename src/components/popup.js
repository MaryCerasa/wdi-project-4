import React from 'react'
import {withRouter} from 'react-router-dom'

class Popup extends React.Component {
  constructor() {
    super()

    this.state = {
      comments: 'test',
      ratings: [],
      redirect: false
    }

    this.navigate = this.navigate.bind(this)
  }

  navigate(url) {
    window.open(url, '_blank')
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
              <li key={item.id} onClick={()=>{
                this.navigate(item.url)
              }}>
                {item.title}
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
