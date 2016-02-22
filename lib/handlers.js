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
        console.log("instagram");
        reply.file('./public/index.html');
    }

};
