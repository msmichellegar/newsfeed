# Newsfeedly
*"What is Michelle doing on the Internet today?"*

This is an aggregated newsfeed, bringing together the latest 5 social media posts from my Twitter ([@msmichellegar](http://www.twitter.com/msmichellegar)) and Instagram ([@msmichellegar](http://www.instagram.com/msmichellegar)) accounts. Currently live [here](http://newsfeedly.herokuapp.com).

## Features

- [x] Posts are aggregated and displayed in the one timeline
- [x] Posts are displayed in date order from newest to oldest
- [x] Posts can be flagged or hidden from appearing on the web page
- [x] Content is displayed based on media content type (text, photos and video)
- [x] Posts are in accordance with throttling restrictions from APIs

## What is this built in?

This app is built with vanilla CSS/JS and jQuery on the frontend, with a Node.js backend. I used [Hapi.js](http://hapijs.com/) for application infrastructure, and [Inert](https://www.npmjs.com/package/inert) for serving static files. [Instagram-node](https://github.com/totemstech/instagram-node), [Twit](https://www.npmjs.com/package/twit) and [Request](https://www.npmjs.com/package/request) were used for making API calls. [Moment.js](http://momentjs.com/) has been used for date-parsing on the frontend. The app has been deployed to Heroku. Tests are written in [Lab](https://www.npmjs.com/package/lab).

### Twitter API

The Twitter API is fairly straightforward. I used the [Twit](https://www.npmjs.com/package/twit) wrapper library for Node to make API calls.

### Instagram API

The Instagram API is quite restrictive, and after changes released in November 2015, all requests must be authenticated (server-side). Instagram also does not allow generic "reader"-style apps anymore.

I used the [Instagram-node](https://github.com/totemstech/instagram-node) module to authenticate the user's account, and obtain an access token. I then used the [Request](https://www.npmjs.com/package/request) module to send the HTTP request to the Instagram endpoint server-side.

### How do I run this project?

##### 1. Clone this repo.

`$ git clone https://github.com/msmichellegar/newsfeedly.git`

##### 2. Install dependencies

`$ npm install`

##### 3. Obtain environment variables

You'll need to obtain API keys for Instagram and Twitter. Set up a sandbox account with Instagram and determine your client ID, redirect URI and client secret. For twitter you'll need a consumer key, consumer secet, access token and access token secret.

Install them in your terminal like so:

`$ export CLIENT_SECRET=[client secret #]`

##### 4. Run the tests

`$ npm run test`

##### 5. Run your server locally

`$ node server.js`
