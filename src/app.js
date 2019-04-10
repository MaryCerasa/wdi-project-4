import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser, Switch } from 'react-router-dom'

import './style.scss'


import Header from './components/headerFooter/header'
import Footer from './components/headerFooter/footer'
import Home from './components/home'


class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Browser>
        <div>
          <Header />
          <Home />
          <Switch>
          </Switch>
          <Footer />
        </div>
      </Browser>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
