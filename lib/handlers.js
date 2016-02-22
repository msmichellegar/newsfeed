var twitter = require('./twitter.js');

module.exports = {

    home: function(request, reply) {
        reply.file('./public/index.html');
    },

    twitter: function(request, reply) {
        var username = request.params.path;

        twitter.getTweets(username, function(data){
            reply(data);
        });
    },

    instagram: function(request, reply) {
        reply.redirect('https://www.instagram.com/oauth/authorize/?client_id=' + process.env.CLIENT_ID + '&redirect_uri=' + process.env.REDIRECT_URI + '&response_type=code');
    }

};
