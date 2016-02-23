var Twit = require('twit');

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

module.exports = {

    twitterT : T,

    getTweets : function(username, callback) {
        T.get('/statuses/user_timeline', {
                screen_name: username,
                count: 5
            }, function(err, data, response) {
                if (err) {
                    callback(err);
                } else {
                    callback(data);
                }
        });
    }

};
