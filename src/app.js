import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import './style.scss'

import Home from './components/home'
import Header from './components/headerFooter/header'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Profile from './components/profile'
import NotFound from './components/notFound'
import Footer from './components/headerFooter/footer'
import Nav from './components/lib/nav'


class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Browser>
        <div>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route component={NotFound} />
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
