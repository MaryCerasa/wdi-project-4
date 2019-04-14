import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import './style.scss'

import Home from './components/home'
import Header from './components/headerFooter/header'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Profile from './components/profile'
import News from './components/news'
import Blogs from './components/blogs'
import MyBlogs from './components/myBlogs'
import NotFound from './components/notFound'
import About from './components/about'
import Footer from './components/headerFooter/footer'
import Nav from './components/lib/nav'
import Contact from './components/contact'

axios.defaults.baseURL = 'http://localhost:5000'

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
            <Route path="/news" component={News}/>
            <Route path="/blogs" component={Blogs}/>
            <Route path="/myblogs" component={MyBlogs}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
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
