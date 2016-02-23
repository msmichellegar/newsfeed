var ig = require('instagram-node').instagram();
var request = require('request');

ig.use({
    client_id: process.env.IG_CLIENT_ID,
    client_secret: process.env.IG_CLIENT_SECRET
});

module.exports = {

    ig: ig,

    // gets the url required to authenticate user with instagram
    getAuthUrl : function(request, callback) {
        var url = ig.get_authorization_url(process.env.IG_REDIRECT_URI);
        callback(url);
    },

    // authorises the user and returns access token
    authorise : function(code, callback) {
        ig.authorize_user(code, process.env.IG_REDIRECT_URI, function(err, results) {
            if (err) {
                console.log("Err in twitter.authorise()", err);
            } else {
                ig.use({ access_token: results.access_token });
                callback(results.access_token);
            }
        });
    },

    getPics: function(token, callback) {

        request('https://api.instagram.com/v1/users/1655822653/media/recent/?access_token=' + token + '&count=5', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(JSON.parse(body));
            }
        });

    }

};
