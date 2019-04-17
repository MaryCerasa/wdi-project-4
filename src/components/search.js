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
    axios.post('/api/search', {text: this.state.query})
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
        <h2><i className="fas fa-search"></i>&nbsp;Search for Primary Cares/ Hospitals/Healthcare professionals</h2>
        <p>Type below name or the location of a healthcare professional, hospital, primary care or the name of the service that you need.</p>
        <div className="search-button">
          <input className="searchInput" placeholder="Type here..."
            onChange={this.handleChange}
          />
          <div className="buttonDiv"
            onClick={this.handleClick}>
            <button className="searchButton">Search
            </button>
          </div>
        </div>
        <Popup className="search-popup"
          show={this.state.isOpen}
          search={this.state.results}
          onClose={this.closePopup}>
        </Popup>
      </div>
    )
  }
}

export default withRouter(Search)
