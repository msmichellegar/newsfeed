var twitter = require('./twitter.js');
var instagram = require('./instagram.js');

module.exports = {

    load: function(request, reply) {

        // if user has not already visited instagram auth url
        if (request.raw.req.url.length === 1) {

            // redirect user to instagram auth url
            instagram.getAuthUrl(request, function(url) {
                reply.redirect(url);
            });

        // if user has obtained instagram auth code
        } else if (request.query.code) {

            // authorise the user with instagram, obtains access token
            instagram.authorise(request.query.code, function(token) {

                // display index.html
                reply.redirect('/feed/' + token);
            });

        }

    },

    feed: function(request, reply) {

        // display index.html
        reply.file('./public/index.html');

    },

    twitter: function(request, reply) {
        var username = request.params.path;

        // get tweets
        twitter.getTweets(username, function(data){
            reply(data);
        });
    },

    instagram: function(request, reply) {
        var token = request.params.path;

        // get instagram pictures
        instagram.getPics(token, function(data){
            reply(data);
        });

    }

};
