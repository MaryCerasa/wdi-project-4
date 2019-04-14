import React from 'react'
import Search from '../components/search'
import { Link } from 'react-router-dom'
import Auth from './lib/auth'

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

  latestBlogs() {
    console.log('getting the blogposts')
    axios.get('/api/latest-blogs')
      .then(res => {
        this.setState({blogs: res.data })
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  componentDidMount() {
    this.latestNews()
    this.latestBlogs()
  }

  render() {
    console.log(this.state)
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
            <ul>
              {this.state.blogs && this.state.blogs.map((item) =>
                <li key={item.id}>

                  {Auth.isAuthenticated() &&
                    <Link to={{
                      pathname: '/view-profile',
                      state: {
                        userId: item.creator.id
                      }
                    }}>
                      <h2>{item.title}</h2>
                      <p>Written by: {item.creator.username}</p>

                  --------------------------------------------------
                    </Link>
                  }

                  {!Auth.isAuthenticated() &&
                    <Link to={{
                      pathname: '/login'
                    }}>
                      <h2>{item.title}</h2>
                      <p>Written by: {item.creator.username}</p>


                  --------------------------------------------------
                    </Link>
                  }

                </li>
              )}
            </ul>
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
