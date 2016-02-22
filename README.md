# Newsfeed

An aggregated newsfeed, integrating the latest 5 social media posts from my Twitter ([@msmichellegar](http://www.twitter.com/msmichellegar)) and Instagram ([@msmichellegar](http://www.instagram.com/msmichellegar)) accounts.

## Features

* Posts are aggregated and displayed in the one timeline
* Posts are displayed in date order from newest to oldest
* Posts can be flagged or hidden from appearing on the web page
* Content is displayed based on media content type (text, photos and video)
* Posts are in accordance with throttling restrictions from APIs

## Challenges

The Instagram API is quite restrictive, and after changes released in November 2015, all requests must be authenticated. Instagram also does not allow "reader"-style apps. This app is only able to display posts from someone with an authenticated sandbox account, which is why I have chosen to display my own posts.
