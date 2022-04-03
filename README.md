# WellNest

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project Brief (SEI Project 4): A Flask + React App

Build a full-stack application with a backend and front-end by using a Python Flask API and serving data from a Postgres database. 

*Requirements:*

* Build a full-stack application by making your own backend and your own front-end ✓
* Use an Express API to serve your data from a Mongo database. ✓
* Consume your API with a separate front-end built with React. ✓
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models. ✓
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut. ✓
* Have a visually impressive design ✓
* Be deployed online so it's publicly accessible. ✓
    
**Timeframe:** 8 days

**Team:** We worked in a team of two on this project.

**Deployed Project Link:**

[WellNest App](https://wellnest-mh.herokuapp.com/ "WellNest App")

## App Overview:

**Overview:** WellNest is an app dedicated to fostering mental health awareness and understanding of mental health disorders.

Our goal is to help you find your wings by initiating and maintaining a positive dialogue among peer support networks. This effort hopes to encourage communication surrounding mental health and wellness in order to break the stigma.

Guests can stay up to date with relevant news provided by the NHS or write blogs about their experiences.

## Tech Stack

**Client:** React, JavaScript (ES6), Python, PostgreSQL, HTML5, CSS-SASS,
Insomnia, FileStack

**Server:** Node,js, Express

**Tools:** Git, Bash, Yarn, GitHub, Trello, Slack, Heroku

**API:** NHS API

**Approach:**
Our goal was to aim for a smooth and friendly user experience. We wanted to create different views for users who created accounts versus regular site visitors. We sought out inspiration from similiar mental health webites.

## Process & Walkthrough:

**Home:**
Users can access to the news, search functionality and the tweets on the home page without registering to the website. The titles of the blogs latest 20 blogs are visible on the home page, however to view a blog, the user must be registered to the website. The users can search for primary cares, hospitals and healthcare professionals by using the search function 

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/home.png

**News Page:**
This is how the news page looks when the user clicks to read an article on the home page. 

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/news.png

**Register:**
Users can register to the website by clicking "register" on the navbar. Username and the email must be unique to be able to register to the website.

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/register.png

**Login:**
Once registered, users can log in to the website. 

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/login.png

**Users' Profile:**
Once logged-in, the users are allowed to create their own profile page. They can add a profile photo. We used filestack for this function. They can update their "about-me" section. They will be able to view their favourite blogs(currently hard coded in). They will also be able to share their own tweets on their page if they want(currently showing the twitter page of the website). 

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/my-profile.png

**Create a Blog:**
Once logged-in, the users can create a blog via their profile page. When "create a blog" button is clicked, the users will be navigated to the "create your blog" page. Here they can create a new blog. Once a blog is created and submitted, it will come up on the home page as well as users own profile. 

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/create-a-blog.png

**Edit a Blog:**
Users can edit their own blogs if they click the "edit" button for each blog. This will navigate the website to the "edit your blog" page which will populate the previous data from the blog. Only the owner of the blogs can edit and delete their blogs. 

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/edit-blog.png

**View a Blog:**
Users can view other users' profile pages and blogs if they are logged-in. They can view other profiles/blogs by clicking their name on the home page. 

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/view-blog.png

**View Others' Profiles:**
This is how others profile look like. Only the owner of that profile page can update their "about-me" section, can edit and delete their blogs. Other users are only allowed to comment and to delete their own comments from other blogs. 

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/view-other-profiles.png

## Look Back:

**Styling:**

We used a CSS-SASS combination to create a color palette that was visually pleasing and soothing, as the goal of the design was to create a "safe space" where people feel comfortable sharing stories.

**Challenges:** 

Getting the news article as a text in a different route. The news article was written in HTML in the API. We managed to to change this into text.

Search functionality at home page also proved to be difficult.

**Solutions:**

**Wins:**

Created a fully functioning mental health blog/ app, working with React components.
Backend fully completed and successfully tested all RESTFUL routes using Insomnia.
Used React Router for routing in the web app.
Interacted with external web API for the news feed.
Completed user authentication.
Deployed to Heroku

Showing a news article in a different tab. We used the code below to convert the article that was written in HTML into text:

```
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
```

## Roadmap:

**Future Features:** 

We would like to add a like button for the articles. Whenever a user likes an article, this article will populate in their "favourite articles" section on their profile page. Favourite articles are currently hard coded in.

We would like to add a search functionality to the blogs on home page, as it is limited to show the latest 20 blogs.

We would like to add "written by" into "view a blog" page.

We would like to have a better user walk through experience.

**Key Learnings:**
This project served as a learning curve for my developer skills, including time management as well as fine tuning our collaborative coding skills.

**Task Management:**

Throughout the project, we used Trello to manage our tasks and list our priorities. This helped us tackle the most important issues first and allowed us to lay down a strong foundation.

*Trello Process:*

https://github.com/marycerasa/wdi-project-4/blob/master/src/assets/screenshots/trello.png

## API Reference

https://api.nhs.uk/mental-health

This API is accessed through HTTP and returns data in a JSON format.

#### Get Mental Health Guide:

```http
  GET /api/items
```

| Parameter          | Type     | Description                |
| :--------          | :------- | :------------------------- |
| `subscription-key` | `string` | **Required**. Your API key |

#### Get Mental Health Topic:

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Acknowledgements

![Logo](https://www.nhs.uk/nhscwebservices/documents/logo1.jpg)

**Social Media:**
[Follow Our WellNest Twitter Account](https://twitter.com/TheWellNestUK "WellNest Twitter")

## Authors :pencil:

- [@marycerasa](https://www.github.com/marycerasa)
- [@buseuslu](https://www.github.com/buseuslu)

