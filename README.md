# What is Michelle doing on the internet today?

This is an aggregated newsfeed, bringing together the latest 5 social media posts from my Twitter ([@msmichellegar](http://www.twitter.com/msmichellegar)) and Instagram ([@msmichellegar](http://www.instagram.com/msmichellegar)) accounts.

## Features

- [x] Posts are aggregated and displayed in the one timeline
- [ ] Posts are displayed in date order from newest to oldest
- [x] Posts can be flagged or hidden from appearing on the web page
- [x] Content is displayed based on media content type (text, photos and video)
- [ ] Posts are in accordance with throttling restrictions from APIs

## Twitter API

The Twitter API is fairly straightforward. I used the *twit* wrapper library for Node to make API calls.

## Instagram API

The Instagram API is quite restrictive, and after changes released in November 2015, all requests must be authenticated. Instagram also does not allow "reader"-style apps anymore. This app is only able to display posts from someone with an authenticated sandbox account, which is why I have chosen to display my own posts.

I've used the *instagram-node* module to authenticate the user's account, and obtain an access token. I've then used the *request* module to send the HTTP request server-side.
