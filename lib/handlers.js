var twitter = require('./twitter.js');
var instagram = require('./instagram.js');

module.exports = {

    home: function(request, reply) {

        // if request comes with instagram access code, load instagram pics
        if (request.query.code) {
            instagram.handleAuth(request.query.code, function(code) {
                console.log("in hand", code);
                instagra
            });
        }

        // display index.html
        reply.file('./public/index.html');
    },

    twitter: function(request, reply) {
        var username = request.params.path;

        // send tweets
        twitter.getTweets(username, function(data){
            reply(data);
        });
    },

    instagram: function(request, reply) {

        // redirecting user to ig auth
        instagram.getUrl(request, function(url) {
            reply.redirect(url);
        });
    }

};
