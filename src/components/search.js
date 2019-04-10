import React from 'react'


class Search extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return(
      <div>
        <h2>Search for News</h2>
        <input className="searchInput" placeholder="Type here...">
        </input>
        <div className="buttonDiv">
          <button className="searchButton">Search
          </button>
        </div>
      </div>
    )
  }
}

export default Search
