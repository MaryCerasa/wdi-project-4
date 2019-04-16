import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import './style.scss'

import Home from './components/home'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Profile from './components/profile'
import News from './components/news'
import NotFound from './components/notFound'
import About from './components/about'
import Footer from './components/headerFooter/footer'
import ViewProfile from './components/viewProfile'
import Blog from './components/blog'
import Contact from './components/contact'
import EditBlog from './components/editBlog'
import Main from './components/main'

axios.defaults.baseURL = 'http://localhost:5000'

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Browser>
        <div>
          <Switch>
            <Route path="/main" component={Main}/>
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/news" component={News}/>
            <Route path="/about" component={About}/>
            <Route path="/view-profile" component={ViewProfile}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/editBlog" component={EditBlog}/>
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
