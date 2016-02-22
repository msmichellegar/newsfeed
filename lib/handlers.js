var twitter = require('./twitter.js');
var instagram = require('./instagram.js');

module.exports = {

    load: function(request, reply) {

        // if user has not already visited instagram auth url
        if (request.raw.req.url.length === 1) {

            // redirects user to instagram auth url
            instagram.getAuthUrl(request, function(url) {
                reply.redirect(url);
            });

        // if user has obtained instagram access token
        } else if (request.query.code) {

            // authorises the user with instagram, obtains signature code
            instagram.authorise(request.query.code, function(code) {

                // display index.html
                reply.redirect('/home/' + code);
            });

        }

    },

    home: function(request, reply) {

        // display index.html
        reply.file('./public/index.html');

    },

    twitter: function(request, reply) {
        var username = request.params.path;

        // send tweets
        twitter.getTweets(username, function(data){
            // reply(data);
            reply(process.env.CONSUMER_KEY, process.env.CONSUMER_SECRET, process.env.ACCESS_KEY, process.env.ACCESS_TOKEN_SECRET)
        });
    }

};
