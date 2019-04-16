import React from 'react'
import Search from '../components/search'
import { Link } from 'react-router-dom'
import Auth from './lib/auth'
import Nav from './lib/nav'
import Header from './headerFooter/header'
import { Timeline } from 'react-twitter-widgets'

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
      <div>
        <Header />
        <Nav />
        <div className="wrapperHome">
          <main>
            <div className="leftSide">
              <div className="news">
                <h1><i className="far fa-newspaper"></i>&nbsp;News</h1>
                <ul>
                  {this.state.articles && this.state.articles.map((item) =>
                    <li key={item.url}>

                      <div className="news-page">
                        <Link to={{
                          pathname: '/news',
                          state: {
                            articleURL: item.url
                          }
                        }}>
                          <i className="fas fa-heartbeat"></i>{item.name}
                        </Link>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="latestBlogs">
              <h1><i className="fas fa-rss"></i>&nbsp;Latest Blogs</h1>
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
              <div className="searchBar">
                <Search />
              </div>

              <div className="tweets">

                <h1><i className="fab fa-twitter"></i>&nbsp;Tweets</h1>
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: 'TheWellNestUK'
                  }}
                  options={{
                    username: 'TheWellNestUK',
                    height: '400'
                  }}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Home
