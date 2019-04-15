import React from 'react'
import Nav from './lib/nav'
import Header from './headerFooter/header'

import axios from 'axios'

class News extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  news() {
    console.log('getting the newss')
    axios.post('/api/news-article', {url: this.props.location.state.articleURL})
      .then(res => {
        console.log('HERE')
        console.log(res.data)
        this.setState({article: res.data})
      })
      .catch(err => this.setState({ error: err.messsage }))
  }

  componentDidMount() {
    this.news()
  }

  render() {
    return(
      <div>
        <Header />
        <Nav />
        <main>
          <div className="newsPage">
            <div className = "title">
              <h1>{this.state.article && this.state.article.headline}</h1>
            </div>
            <div className="article" dangerouslySetInnerHTML={{__html: this.state.article && this.state.article.mainContentOfPage[0].text}} />
          </div>
        </main>
      </div>
    )
  }
}

export default News
