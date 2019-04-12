import React from 'react'
import axios from 'axios'
import Popup from '../components/popup'
import {withRouter} from 'react-router-dom'

class Search extends React.Component {
  constructor(){
    super()

    this.state = {
      isOpen: false,
      data: {},
      errors: {},
      results: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.closePopup = this.closePopup.bind(this)
  }

  handleChange({ target: { value } }) {
    this.setState({...this.state, query: value })
  }

  handleClick(e) {
    e.preventDefault()
    axios.post('/api/search', {search: this.state.query})
      .then(search => {
        this.setState({results: search.data})
        this.openPopup()
      })
      .catch(err => console.log(err))
  }

  openPopup (){
    this.setState({
      isOpen: true
    })
  }

  closePopup () {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return(
      <div className="search">
        <h2>Search for News</h2>
        <input className="searchInput" placeholder="Type here..."
          onChange={this.handleChange}
        />
        <div className="buttonDiv"
          onClick={this.handleClick}>
          <button className="searchButton">Search
          </button>
          <Popup
            show={this.state.isOpen}
            search={this.state.results}
            onClose={this.closePopup}>
          </Popup>
        </div>
      </div>
    )
  }
}

export default withRouter(Search)
