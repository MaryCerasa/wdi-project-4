import React from 'react'
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
      <main>
        <div className="news">
          <div className = "title">
            <h1>{this.state.article && this.state.article.headline}</h1>
          </div>
          <div dangerouslySetInnerHTML={{__html: this.state.article && this.state.article.mainContentOfPage[0].text}} />
        </div>
      </main>
    )
  }
}

export default News
