import React from 'react'
import Search from '../components/search'
import { Link } from 'react-router-dom'

import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('test')
  }

  latestNews() {
    console.log('getting the news')
    axios.get('/api/latest-news')
      .then(res => {
        this.setState({articles: res.data.significantLink })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  componentDidMount() {
    this.latestNews()
  }

  render() {
    return(
      <div className="wrapper">
        <main>
          <div className="leftSide">
            <div className="searchBar">
              <Search />
            </div>
            <div className="news">
              <h1>News</h1>
              <ul>
                {this.state.articles && this.state.articles.map((item) =>
                  <li key={item.url}>
                    <Link to={{
                      pathname: '/news',
                      state: {
                        articleURL: item.url
                      }
                    }}>
                      {item.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="latestBlogs">
            <h1>Latest Blogs</h1>
          </div>
          <div className="rightSide">
            <div className="mapsOffices">
              <h1>Maps</h1>
            </div>
            <div className="tweets">
              <h1>Tweets</h1>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home
